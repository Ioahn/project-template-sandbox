type MaybeNull<T> = T | null;
type MaybeString<T> = T | string;
type Optional<T> = {
  [Keys in keyof T]?: T[Keys];
};

type Primitive = number | string | boolean | Record<string, any>;

type PrimitiveObject = Record<string, Primitive>;

declare namespace DI {
  import("inversify");
  import { interfaces } from "inversify";

  type IFactory<T> = interfaces.Factory<T>;
  type IContext = interfaces.Context;
}

declare module "*.jpeg" {
  const value: any;
  export default value;
}
