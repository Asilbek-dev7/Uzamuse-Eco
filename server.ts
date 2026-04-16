import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  app.get("/robots.txt", (_req, res) => {
    res.type("text/plain").send(`User-agent: *
Allow: /

Sitemap: https://uzamuseeco.uz/sitemap.xml
`);
  });

  app.get("/sitemap.xml", (_req, res) => {
    res.type("application/xml").send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://uzamuseeco.uz/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`);
  });

  // API routes
  app.get("/api/orders", (req, res) => {
    try {
      const orders = JSON.parse(fs.readFileSync("./orders.json", "utf8") || "[]");
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: "Failed to read orders" });
    }
  });

  app.post("/api/orders", async (req, res) => {
    try {
      const orders = JSON.parse(fs.readFileSync("./orders.json", "utf8") || "[]");
      const newOrder = {
        ...req.body,
        id: Date.now(),
        date: new Date().toLocaleString(),
        status: "in-progress"
      };
      orders.push(newOrder);
      fs.writeFileSync("./orders.json", JSON.stringify(orders, null, 2));

      // SMS Integration (Twilio)
      const accountSid = process.env.TWILIO_ACCOUNT_SID;
      const authToken = process.env.TWILIO_AUTH_TOKEN;
      const fromNumber = process.env.TWILIO_FROM_NUMBER;
      const toNumber = process.env.TWILIO_TO_NUMBER || "+998977049933"; // Default to the number requested by the user

      if (accountSid && authToken && fromNumber) {
        try {
          const twilio = require('twilio');
          const client = new twilio(accountSid, authToken);
          await client.messages.create({
            body: `Новый заказ от ${newOrder.name} (${newOrder.phone}): ${newOrder.message || 'Без сообщения'}`,
            from: fromNumber,
            to: toNumber
          });
          console.log("SMS sent successfully");
        } catch (smsError) {
          console.error("Failed to send SMS:", smsError);
        }
      } else {
        console.warn("Twilio credentials not found. SMS not sent.");
      }

      res.json(newOrder);
    } catch (error) {
      res.status(500).json({ error: "Failed to save order" });
    }
  });

  app.put("/api/orders/:id", (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const orders = JSON.parse(fs.readFileSync("./orders.json", "utf8") || "[]");
      const updatedOrders = orders.map((order: any) => 
        order.id === id ? { ...order, ...req.body } : order
      );
      fs.writeFileSync("./orders.json", JSON.stringify(updatedOrders, null, 2));
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to update order" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
