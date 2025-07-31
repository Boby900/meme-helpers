// Based on your second screenshot
import { Hono } from 'hono';
import type { Bindings } from './types';
import { HTTPException } from 'hono/http-exception';
import { z } from 'zod';

export function createApp(): Hono<{ Bindings: Bindings }> {
  const app = new Hono<{ Bindings: Bindings }>();
  
  // Add your error handling
  app.onError((err, c) => {
    if (err instanceof HTTPException || err instanceof z.ZodError) {
      return c.json({
        message: "Something went wrong 🤔",
        error: err.message
      });
    }
    
    return c.json({
      message: "Internal Server Error",
      error: err.message
    }, 500);
  });

  return app;
}