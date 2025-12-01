/*
  Ejemplo de implementación `IStorage` usando Postgres + Drizzle.
  Este archivo es una plantilla: instala las dependencias necesarias
  (ej: `npm i drizzle-orm pg` o la variante que prefieras) antes de usarlo.

  Pasos rápidos:
  - Añade `DATABASE_URL` en el entorno.
  - Instala dependencias: `npm i drizzle-orm pg`
  - Ajusta las consultas según la versión de Drizzle que uses.
*/

import type { IStorage } from "./storage";
import type { InsertUser, User } from "@shared/schema";

// IMPORTANTE: el ejemplo está escrito de forma genérica porque las importaciones
// exactas de Drizzle dependen de la versión/adapter que uses.

// Ejemplo (comentado) usando `pg` + `drizzle-orm` (ajusta según tu setup):
/*
import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { users } from '@shared/schema';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle(pool);

export class PostgresStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0] as User | undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0] as User | undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user as User;
  }
}

export const storage: IStorage = new PostgresStorage();
*/

// Placeholder implementation that throws until the user enables Postgres.
export class PostgresStorage implements IStorage {
  async getUser(_id: string): Promise<User | undefined> {
    throw new Error("Postgres storage not configured. Install drizzle + pg and enable server/storage.pg.ts");
  }
  async getUserByUsername(_username: string): Promise<User | undefined> {
    throw new Error("Postgres storage not configured. Install drizzle + pg and enable server/storage.pg.ts");
  }
  async createUser(_user: InsertUser): Promise<User> {
    throw new Error("Postgres storage not configured. Install drizzle + pg and enable server/storage.pg.ts");
  }
}

export const storage: IStorage = new PostgresStorage();
