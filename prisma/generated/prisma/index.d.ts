
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Store
 * 
 */
export type Store = $Result.DefaultSelection<Prisma.$StorePayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Flyer
 * 
 */
export type Flyer = $Result.DefaultSelection<Prisma.$FlyerPayload>
/**
 * Model FlyerItem
 * 
 */
export type FlyerItem = $Result.DefaultSelection<Prisma.$FlyerItemPayload>
/**
 * Model Coupon
 * 
 */
export type Coupon = $Result.DefaultSelection<Prisma.$CouponPayload>
/**
 * Model ShoppingList
 * 
 */
export type ShoppingList = $Result.DefaultSelection<Prisma.$ShoppingListPayload>
/**
 * Model ShoppingListItem
 * 
 */
export type ShoppingListItem = $Result.DefaultSelection<Prisma.$ShoppingListItemPayload>
/**
 * Model WishlistItem
 * 
 */
export type WishlistItem = $Result.DefaultSelection<Prisma.$WishlistItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  RETAILER: 'RETAILER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.store`: Exposes CRUD operations for the **Store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.StoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flyer`: Exposes CRUD operations for the **Flyer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flyers
    * const flyers = await prisma.flyer.findMany()
    * ```
    */
  get flyer(): Prisma.FlyerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flyerItem`: Exposes CRUD operations for the **FlyerItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlyerItems
    * const flyerItems = await prisma.flyerItem.findMany()
    * ```
    */
  get flyerItem(): Prisma.FlyerItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coupon`: Exposes CRUD operations for the **Coupon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coupons
    * const coupons = await prisma.coupon.findMany()
    * ```
    */
  get coupon(): Prisma.CouponDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shoppingList`: Exposes CRUD operations for the **ShoppingList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShoppingLists
    * const shoppingLists = await prisma.shoppingList.findMany()
    * ```
    */
  get shoppingList(): Prisma.ShoppingListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shoppingListItem`: Exposes CRUD operations for the **ShoppingListItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShoppingListItems
    * const shoppingListItems = await prisma.shoppingListItem.findMany()
    * ```
    */
  get shoppingListItem(): Prisma.ShoppingListItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wishlistItem`: Exposes CRUD operations for the **WishlistItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WishlistItems
    * const wishlistItems = await prisma.wishlistItem.findMany()
    * ```
    */
  get wishlistItem(): Prisma.WishlistItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Store: 'Store',
    Category: 'Category',
    Flyer: 'Flyer',
    FlyerItem: 'FlyerItem',
    Coupon: 'Coupon',
    ShoppingList: 'ShoppingList',
    ShoppingListItem: 'ShoppingListItem',
    WishlistItem: 'WishlistItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "store" | "category" | "flyer" | "flyerItem" | "coupon" | "shoppingList" | "shoppingListItem" | "wishlistItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Store: {
        payload: Prisma.$StorePayload<ExtArgs>
        fields: Prisma.StoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findFirst: {
            args: Prisma.StoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findMany: {
            args: Prisma.StoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          create: {
            args: Prisma.StoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          createMany: {
            args: Prisma.StoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          delete: {
            args: Prisma.StoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          update: {
            args: Prisma.StoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          deleteMany: {
            args: Prisma.StoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          upsert: {
            args: Prisma.StoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          aggregate: {
            args: Prisma.StoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStore>
          }
          groupBy: {
            args: Prisma.StoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreCountArgs<ExtArgs>
            result: $Utils.Optional<StoreCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Flyer: {
        payload: Prisma.$FlyerPayload<ExtArgs>
        fields: Prisma.FlyerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlyerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlyerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlyerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlyerPayload>
          }
          findFirst: {
            args: Prisma.FlyerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlyerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlyerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlyerPayload>
          }
          findMany: {
            args: Prisma.FlyerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlyerPayload>[]
          }
          create: {
            args: Prisma.FlyerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlyerPayload>
          }
          createMany: {
            args: Prisma.FlyerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlyerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlyerPayload>[]
          }
          delete: {
            args: Prisma.FlyerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlyerPayload>
          }
          update: {
            args: Prisma.FlyerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlyerPayload>
          }
          deleteMany: {
            args: Prisma.FlyerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlyerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlyerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlyerPayload>[]
          }
          upsert: {
            args: Prisma.FlyerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlyerPayload>
          }
          aggregate: {
            args: Prisma.FlyerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlyer>
          }
          groupBy: {
            args: Prisma.FlyerGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlyerGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlyerCountArgs<ExtArgs>
            result: $Utils.Optional<FlyerCountAggregateOutputType> | number
          }
        }
      }
      FlyerItem: {
        payload: Prisma.$FlyerItemPayload<ExtArgs>
        fields: Prisma.FlyerItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlyerItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlyerItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlyerItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlyerItemPayload>
          }
          findFirst: {
            args: Prisma.FlyerItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlyerItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlyerItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlyerItemPayload>
          }
          findMany: {
            args: Prisma.FlyerItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlyerItemPayload>[]
          }
          create: {
            args: Prisma.FlyerItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlyerItemPayload>
          }
          createMany: {
            args: Prisma.FlyerItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlyerItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlyerItemPayload>[]
          }
          delete: {
            args: Prisma.FlyerItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlyerItemPayload>
          }
          update: {
            args: Prisma.FlyerItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlyerItemPayload>
          }
          deleteMany: {
            args: Prisma.FlyerItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlyerItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlyerItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlyerItemPayload>[]
          }
          upsert: {
            args: Prisma.FlyerItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlyerItemPayload>
          }
          aggregate: {
            args: Prisma.FlyerItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlyerItem>
          }
          groupBy: {
            args: Prisma.FlyerItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlyerItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlyerItemCountArgs<ExtArgs>
            result: $Utils.Optional<FlyerItemCountAggregateOutputType> | number
          }
        }
      }
      Coupon: {
        payload: Prisma.$CouponPayload<ExtArgs>
        fields: Prisma.CouponFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CouponFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CouponFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          findFirst: {
            args: Prisma.CouponFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CouponFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          findMany: {
            args: Prisma.CouponFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>[]
          }
          create: {
            args: Prisma.CouponCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          createMany: {
            args: Prisma.CouponCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CouponCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>[]
          }
          delete: {
            args: Prisma.CouponDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          update: {
            args: Prisma.CouponUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          deleteMany: {
            args: Prisma.CouponDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CouponUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CouponUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>[]
          }
          upsert: {
            args: Prisma.CouponUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          aggregate: {
            args: Prisma.CouponAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoupon>
          }
          groupBy: {
            args: Prisma.CouponGroupByArgs<ExtArgs>
            result: $Utils.Optional<CouponGroupByOutputType>[]
          }
          count: {
            args: Prisma.CouponCountArgs<ExtArgs>
            result: $Utils.Optional<CouponCountAggregateOutputType> | number
          }
        }
      }
      ShoppingList: {
        payload: Prisma.$ShoppingListPayload<ExtArgs>
        fields: Prisma.ShoppingListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShoppingListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShoppingListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>
          }
          findFirst: {
            args: Prisma.ShoppingListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShoppingListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>
          }
          findMany: {
            args: Prisma.ShoppingListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>[]
          }
          create: {
            args: Prisma.ShoppingListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>
          }
          createMany: {
            args: Prisma.ShoppingListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShoppingListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>[]
          }
          delete: {
            args: Prisma.ShoppingListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>
          }
          update: {
            args: Prisma.ShoppingListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>
          }
          deleteMany: {
            args: Prisma.ShoppingListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShoppingListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShoppingListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>[]
          }
          upsert: {
            args: Prisma.ShoppingListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>
          }
          aggregate: {
            args: Prisma.ShoppingListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShoppingList>
          }
          groupBy: {
            args: Prisma.ShoppingListGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShoppingListGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShoppingListCountArgs<ExtArgs>
            result: $Utils.Optional<ShoppingListCountAggregateOutputType> | number
          }
        }
      }
      ShoppingListItem: {
        payload: Prisma.$ShoppingListItemPayload<ExtArgs>
        fields: Prisma.ShoppingListItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShoppingListItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShoppingListItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemPayload>
          }
          findFirst: {
            args: Prisma.ShoppingListItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShoppingListItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemPayload>
          }
          findMany: {
            args: Prisma.ShoppingListItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemPayload>[]
          }
          create: {
            args: Prisma.ShoppingListItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemPayload>
          }
          createMany: {
            args: Prisma.ShoppingListItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShoppingListItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemPayload>[]
          }
          delete: {
            args: Prisma.ShoppingListItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemPayload>
          }
          update: {
            args: Prisma.ShoppingListItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemPayload>
          }
          deleteMany: {
            args: Prisma.ShoppingListItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShoppingListItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShoppingListItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemPayload>[]
          }
          upsert: {
            args: Prisma.ShoppingListItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemPayload>
          }
          aggregate: {
            args: Prisma.ShoppingListItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShoppingListItem>
          }
          groupBy: {
            args: Prisma.ShoppingListItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShoppingListItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShoppingListItemCountArgs<ExtArgs>
            result: $Utils.Optional<ShoppingListItemCountAggregateOutputType> | number
          }
        }
      }
      WishlistItem: {
        payload: Prisma.$WishlistItemPayload<ExtArgs>
        fields: Prisma.WishlistItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WishlistItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WishlistItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistItemPayload>
          }
          findFirst: {
            args: Prisma.WishlistItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WishlistItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistItemPayload>
          }
          findMany: {
            args: Prisma.WishlistItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistItemPayload>[]
          }
          create: {
            args: Prisma.WishlistItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistItemPayload>
          }
          createMany: {
            args: Prisma.WishlistItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WishlistItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistItemPayload>[]
          }
          delete: {
            args: Prisma.WishlistItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistItemPayload>
          }
          update: {
            args: Prisma.WishlistItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistItemPayload>
          }
          deleteMany: {
            args: Prisma.WishlistItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WishlistItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WishlistItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistItemPayload>[]
          }
          upsert: {
            args: Prisma.WishlistItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistItemPayload>
          }
          aggregate: {
            args: Prisma.WishlistItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWishlistItem>
          }
          groupBy: {
            args: Prisma.WishlistItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<WishlistItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.WishlistItemCountArgs<ExtArgs>
            result: $Utils.Optional<WishlistItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    store?: StoreOmit
    category?: CategoryOmit
    flyer?: FlyerOmit
    flyerItem?: FlyerItemOmit
    coupon?: CouponOmit
    shoppingList?: ShoppingListOmit
    shoppingListItem?: ShoppingListItemOmit
    wishlistItem?: WishlistItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    preferredStores: number
    preferredCategories: number
    savedFlyers: number
    savedCoupons: number
    shoppingLists: number
    wishlist: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preferredStores?: boolean | UserCountOutputTypeCountPreferredStoresArgs
    preferredCategories?: boolean | UserCountOutputTypeCountPreferredCategoriesArgs
    savedFlyers?: boolean | UserCountOutputTypeCountSavedFlyersArgs
    savedCoupons?: boolean | UserCountOutputTypeCountSavedCouponsArgs
    shoppingLists?: boolean | UserCountOutputTypeCountShoppingListsArgs
    wishlist?: boolean | UserCountOutputTypeCountWishlistArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPreferredStoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPreferredCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedFlyersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlyerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedCouponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CouponWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShoppingListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShoppingListWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWishlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WishlistItemWhereInput
  }


  /**
   * Count Type StoreCountOutputType
   */

  export type StoreCountOutputType = {
    flyers: number
    coupons: number
    favoredBy: number
    categories: number
  }

  export type StoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flyers?: boolean | StoreCountOutputTypeCountFlyersArgs
    coupons?: boolean | StoreCountOutputTypeCountCouponsArgs
    favoredBy?: boolean | StoreCountOutputTypeCountFavoredByArgs
    categories?: boolean | StoreCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     */
    select?: StoreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountFlyersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlyerWhereInput
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountCouponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CouponWhereInput
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountFavoredByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    flyers: number
    coupons: number
    stores: number
    preferredBy: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flyers?: boolean | CategoryCountOutputTypeCountFlyersArgs
    coupons?: boolean | CategoryCountOutputTypeCountCouponsArgs
    stores?: boolean | CategoryCountOutputTypeCountStoresArgs
    preferredBy?: boolean | CategoryCountOutputTypeCountPreferredByArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountFlyersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlyerWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountCouponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CouponWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountStoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountPreferredByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type FlyerCountOutputType
   */

  export type FlyerCountOutputType = {
    categories: number
    savedBy: number
    items: number
  }

  export type FlyerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | FlyerCountOutputTypeCountCategoriesArgs
    savedBy?: boolean | FlyerCountOutputTypeCountSavedByArgs
    items?: boolean | FlyerCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * FlyerCountOutputType without action
   */
  export type FlyerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlyerCountOutputType
     */
    select?: FlyerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FlyerCountOutputType without action
   */
  export type FlyerCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * FlyerCountOutputType without action
   */
  export type FlyerCountOutputTypeCountSavedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * FlyerCountOutputType without action
   */
  export type FlyerCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlyerItemWhereInput
  }


  /**
   * Count Type FlyerItemCountOutputType
   */

  export type FlyerItemCountOutputType = {
    shoppingListItems: number
    wishlistItems: number
  }

  export type FlyerItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shoppingListItems?: boolean | FlyerItemCountOutputTypeCountShoppingListItemsArgs
    wishlistItems?: boolean | FlyerItemCountOutputTypeCountWishlistItemsArgs
  }

  // Custom InputTypes
  /**
   * FlyerItemCountOutputType without action
   */
  export type FlyerItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlyerItemCountOutputType
     */
    select?: FlyerItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FlyerItemCountOutputType without action
   */
  export type FlyerItemCountOutputTypeCountShoppingListItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShoppingListItemWhereInput
  }

  /**
   * FlyerItemCountOutputType without action
   */
  export type FlyerItemCountOutputTypeCountWishlistItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WishlistItemWhereInput
  }


  /**
   * Count Type CouponCountOutputType
   */

  export type CouponCountOutputType = {
    categories: number
    savedBy: number
  }

  export type CouponCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | CouponCountOutputTypeCountCategoriesArgs
    savedBy?: boolean | CouponCountOutputTypeCountSavedByArgs
  }

  // Custom InputTypes
  /**
   * CouponCountOutputType without action
   */
  export type CouponCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponCountOutputType
     */
    select?: CouponCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CouponCountOutputType without action
   */
  export type CouponCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * CouponCountOutputType without action
   */
  export type CouponCountOutputTypeCountSavedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type ShoppingListCountOutputType
   */

  export type ShoppingListCountOutputType = {
    items: number
  }

  export type ShoppingListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ShoppingListCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * ShoppingListCountOutputType without action
   */
  export type ShoppingListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListCountOutputType
     */
    select?: ShoppingListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShoppingListCountOutputType without action
   */
  export type ShoppingListCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShoppingListItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    name: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
    location: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    name: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
    location: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    phone: number
    name: number
    role: number
    createdAt: number
    updatedAt: number
    location: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    location?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    location?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    location?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    phone: string | null
    name: string | null
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    location: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    location?: boolean
    preferredStores?: boolean | User$preferredStoresArgs<ExtArgs>
    preferredCategories?: boolean | User$preferredCategoriesArgs<ExtArgs>
    savedFlyers?: boolean | User$savedFlyersArgs<ExtArgs>
    savedCoupons?: boolean | User$savedCouponsArgs<ExtArgs>
    shoppingLists?: boolean | User$shoppingListsArgs<ExtArgs>
    wishlist?: boolean | User$wishlistArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    location?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    location?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    phone?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    location?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "phone" | "name" | "role" | "createdAt" | "updatedAt" | "location", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preferredStores?: boolean | User$preferredStoresArgs<ExtArgs>
    preferredCategories?: boolean | User$preferredCategoriesArgs<ExtArgs>
    savedFlyers?: boolean | User$savedFlyersArgs<ExtArgs>
    savedCoupons?: boolean | User$savedCouponsArgs<ExtArgs>
    shoppingLists?: boolean | User$shoppingListsArgs<ExtArgs>
    wishlist?: boolean | User$wishlistArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      preferredStores: Prisma.$StorePayload<ExtArgs>[]
      preferredCategories: Prisma.$CategoryPayload<ExtArgs>[]
      savedFlyers: Prisma.$FlyerPayload<ExtArgs>[]
      savedCoupons: Prisma.$CouponPayload<ExtArgs>[]
      shoppingLists: Prisma.$ShoppingListPayload<ExtArgs>[]
      wishlist: Prisma.$WishlistItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      phone: string | null
      name: string | null
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
      location: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    preferredStores<T extends User$preferredStoresArgs<ExtArgs> = {}>(args?: Subset<T, User$preferredStoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    preferredCategories<T extends User$preferredCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$preferredCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    savedFlyers<T extends User$savedFlyersArgs<ExtArgs> = {}>(args?: Subset<T, User$savedFlyersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlyerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    savedCoupons<T extends User$savedCouponsArgs<ExtArgs> = {}>(args?: Subset<T, User$savedCouponsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shoppingLists<T extends User$shoppingListsArgs<ExtArgs> = {}>(args?: Subset<T, User$shoppingListsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wishlist<T extends User$wishlistArgs<ExtArgs> = {}>(args?: Subset<T, User$wishlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly location: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.preferredStores
   */
  export type User$preferredStoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    cursor?: StoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * User.preferredCategories
   */
  export type User$preferredCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * User.savedFlyers
   */
  export type User$savedFlyersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flyer
     */
    select?: FlyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flyer
     */
    omit?: FlyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlyerInclude<ExtArgs> | null
    where?: FlyerWhereInput
    orderBy?: FlyerOrderByWithRelationInput | FlyerOrderByWithRelationInput[]
    cursor?: FlyerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlyerScalarFieldEnum | FlyerScalarFieldEnum[]
  }

  /**
   * User.savedCoupons
   */
  export type User$savedCouponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    where?: CouponWhereInput
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    cursor?: CouponWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * User.shoppingLists
   */
  export type User$shoppingListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    where?: ShoppingListWhereInput
    orderBy?: ShoppingListOrderByWithRelationInput | ShoppingListOrderByWithRelationInput[]
    cursor?: ShoppingListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShoppingListScalarFieldEnum | ShoppingListScalarFieldEnum[]
  }

  /**
   * User.wishlist
   */
  export type User$wishlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
    where?: WishlistItemWhereInput
    orderBy?: WishlistItemOrderByWithRelationInput | WishlistItemOrderByWithRelationInput[]
    cursor?: WishlistItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WishlistItemScalarFieldEnum | WishlistItemScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Store
   */

  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type StoreSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type StoreMinAggregateOutputType = {
    id: string | null
    name: string | null
    logo: string | null
    description: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreMaxAggregateOutputType = {
    id: string | null
    name: string | null
    logo: string | null
    description: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreCountAggregateOutputType = {
    id: number
    name: number
    logo: number
    description: number
    address: number
    latitude: number
    longitude: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StoreAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type StoreSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type StoreMinAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    description?: true
    address?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreMaxAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    description?: true
    address?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreCountAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    description?: true
    address?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Store to aggregate.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type StoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithAggregationInput | StoreOrderByWithAggregationInput[]
    by: StoreScalarFieldEnum[] | StoreScalarFieldEnum
    having?: StoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _avg?: StoreAvgAggregateInputType
    _sum?: StoreSumAggregateInputType
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }

  export type StoreGroupByOutputType = {
    id: string
    name: string
    logo: string | null
    description: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date
    updatedAt: Date
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends StoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type StoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    description?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    flyers?: boolean | Store$flyersArgs<ExtArgs>
    coupons?: boolean | Store$couponsArgs<ExtArgs>
    favoredBy?: boolean | Store$favoredByArgs<ExtArgs>
    categories?: boolean | Store$categoriesArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>

  export type StoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    description?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["store"]>

  export type StoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    description?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["store"]>

  export type StoreSelectScalar = {
    id?: boolean
    name?: boolean
    logo?: boolean
    description?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "logo" | "description" | "address" | "latitude" | "longitude" | "createdAt" | "updatedAt", ExtArgs["result"]["store"]>
  export type StoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flyers?: boolean | Store$flyersArgs<ExtArgs>
    coupons?: boolean | Store$couponsArgs<ExtArgs>
    favoredBy?: boolean | Store$favoredByArgs<ExtArgs>
    categories?: boolean | Store$categoriesArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Store"
    objects: {
      flyers: Prisma.$FlyerPayload<ExtArgs>[]
      coupons: Prisma.$CouponPayload<ExtArgs>[]
      favoredBy: Prisma.$UserPayload<ExtArgs>[]
      categories: Prisma.$CategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      logo: string | null
      description: string | null
      address: string | null
      latitude: number | null
      longitude: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["store"]>
    composites: {}
  }

  type StoreGetPayload<S extends boolean | null | undefined | StoreDefaultArgs> = $Result.GetResult<Prisma.$StorePayload, S>

  type StoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreCountAggregateInputType | true
    }

  export interface StoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Store'], meta: { name: 'Store' } }
    /**
     * Find zero or one Store that matches the filter.
     * @param {StoreFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreFindUniqueArgs>(args: SelectSubset<T, StoreFindUniqueArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Store that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoreFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreFindFirstArgs>(args?: SelectSubset<T, StoreFindFirstArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeWithIdOnly = await prisma.store.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreFindManyArgs>(args?: SelectSubset<T, StoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Store.
     * @param {StoreCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
     */
    create<T extends StoreCreateArgs>(args: SelectSubset<T, StoreCreateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stores.
     * @param {StoreCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreCreateManyArgs>(args?: SelectSubset<T, StoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stores and returns the data saved in the database.
     * @param {StoreCreateManyAndReturnArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stores and only return the `id`
     * const storeWithIdOnly = await prisma.store.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoreCreateManyAndReturnArgs>(args?: SelectSubset<T, StoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Store.
     * @param {StoreDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
     */
    delete<T extends StoreDeleteArgs>(args: SelectSubset<T, StoreDeleteArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Store.
     * @param {StoreUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreUpdateArgs>(args: SelectSubset<T, StoreUpdateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stores.
     * @param {StoreDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreDeleteManyArgs>(args?: SelectSubset<T, StoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreUpdateManyArgs>(args: SelectSubset<T, StoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores and returns the data updated in the database.
     * @param {StoreUpdateManyAndReturnArgs} args - Arguments to update many Stores.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stores and only return the `id`
     * const storeWithIdOnly = await prisma.store.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StoreUpdateManyAndReturnArgs>(args: SelectSubset<T, StoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Store.
     * @param {StoreUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
     */
    upsert<T extends StoreUpsertArgs>(args: SelectSubset<T, StoreUpsertArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends StoreCountArgs>(
      args?: Subset<T, StoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreGroupByArgs['orderBy'] }
        : { orderBy?: StoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Store model
   */
  readonly fields: StoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flyers<T extends Store$flyersArgs<ExtArgs> = {}>(args?: Subset<T, Store$flyersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlyerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coupons<T extends Store$couponsArgs<ExtArgs> = {}>(args?: Subset<T, Store$couponsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoredBy<T extends Store$favoredByArgs<ExtArgs> = {}>(args?: Subset<T, Store$favoredByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends Store$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Store$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Store model
   */
  interface StoreFieldRefs {
    readonly id: FieldRef<"Store", 'String'>
    readonly name: FieldRef<"Store", 'String'>
    readonly logo: FieldRef<"Store", 'String'>
    readonly description: FieldRef<"Store", 'String'>
    readonly address: FieldRef<"Store", 'String'>
    readonly latitude: FieldRef<"Store", 'Float'>
    readonly longitude: FieldRef<"Store", 'Float'>
    readonly createdAt: FieldRef<"Store", 'DateTime'>
    readonly updatedAt: FieldRef<"Store", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Store findUnique
   */
  export type StoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findUniqueOrThrow
   */
  export type StoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findFirst
   */
  export type StoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findFirstOrThrow
   */
  export type StoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findMany
   */
  export type StoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Stores to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store create
   */
  export type StoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Store.
     */
    data: XOR<StoreCreateInput, StoreUncheckedCreateInput>
  }

  /**
   * Store createMany
   */
  export type StoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Store createManyAndReturn
   */
  export type StoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Store update
   */
  export type StoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Store.
     */
    data: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
    /**
     * Choose, which Store to update.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store updateMany
   */
  export type StoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to update.
     */
    limit?: number
  }

  /**
   * Store updateManyAndReturn
   */
  export type StoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to update.
     */
    limit?: number
  }

  /**
   * Store upsert
   */
  export type StoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Store to update in case it exists.
     */
    where: StoreWhereUniqueInput
    /**
     * In case the Store found by the `where` argument doesn't exist, create a new Store with this data.
     */
    create: XOR<StoreCreateInput, StoreUncheckedCreateInput>
    /**
     * In case the Store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
  }

  /**
   * Store delete
   */
  export type StoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter which Store to delete.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store deleteMany
   */
  export type StoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stores to delete
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to delete.
     */
    limit?: number
  }

  /**
   * Store.flyers
   */
  export type Store$flyersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flyer
     */
    select?: FlyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flyer
     */
    omit?: FlyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlyerInclude<ExtArgs> | null
    where?: FlyerWhereInput
    orderBy?: FlyerOrderByWithRelationInput | FlyerOrderByWithRelationInput[]
    cursor?: FlyerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlyerScalarFieldEnum | FlyerScalarFieldEnum[]
  }

  /**
   * Store.coupons
   */
  export type Store$couponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    where?: CouponWhereInput
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    cursor?: CouponWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Store.favoredBy
   */
  export type Store$favoredByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Store.categories
   */
  export type Store$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Store without action
   */
  export type StoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    flyers?: boolean | Category$flyersArgs<ExtArgs>
    coupons?: boolean | Category$couponsArgs<ExtArgs>
    stores?: boolean | Category$storesArgs<ExtArgs>
    preferredBy?: boolean | Category$preferredByArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flyers?: boolean | Category$flyersArgs<ExtArgs>
    coupons?: boolean | Category$couponsArgs<ExtArgs>
    stores?: boolean | Category$storesArgs<ExtArgs>
    preferredBy?: boolean | Category$preferredByArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      flyers: Prisma.$FlyerPayload<ExtArgs>[]
      coupons: Prisma.$CouponPayload<ExtArgs>[]
      stores: Prisma.$StorePayload<ExtArgs>[]
      preferredBy: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flyers<T extends Category$flyersArgs<ExtArgs> = {}>(args?: Subset<T, Category$flyersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlyerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coupons<T extends Category$couponsArgs<ExtArgs> = {}>(args?: Subset<T, Category$couponsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stores<T extends Category$storesArgs<ExtArgs> = {}>(args?: Subset<T, Category$storesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    preferredBy<T extends Category$preferredByArgs<ExtArgs> = {}>(args?: Subset<T, Category$preferredByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.flyers
   */
  export type Category$flyersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flyer
     */
    select?: FlyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flyer
     */
    omit?: FlyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlyerInclude<ExtArgs> | null
    where?: FlyerWhereInput
    orderBy?: FlyerOrderByWithRelationInput | FlyerOrderByWithRelationInput[]
    cursor?: FlyerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlyerScalarFieldEnum | FlyerScalarFieldEnum[]
  }

  /**
   * Category.coupons
   */
  export type Category$couponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    where?: CouponWhereInput
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    cursor?: CouponWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Category.stores
   */
  export type Category$storesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    cursor?: StoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Category.preferredBy
   */
  export type Category$preferredByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Flyer
   */

  export type AggregateFlyer = {
    _count: FlyerCountAggregateOutputType | null
    _min: FlyerMinAggregateOutputType | null
    _max: FlyerMaxAggregateOutputType | null
  }

  export type FlyerMinAggregateOutputType = {
    id: string | null
    title: string | null
    storeId: string | null
    imageUrl: string | null
    startDate: Date | null
    endDate: Date | null
    isSponsored: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlyerMaxAggregateOutputType = {
    id: string | null
    title: string | null
    storeId: string | null
    imageUrl: string | null
    startDate: Date | null
    endDate: Date | null
    isSponsored: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlyerCountAggregateOutputType = {
    id: number
    title: number
    storeId: number
    imageUrl: number
    startDate: number
    endDate: number
    isSponsored: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FlyerMinAggregateInputType = {
    id?: true
    title?: true
    storeId?: true
    imageUrl?: true
    startDate?: true
    endDate?: true
    isSponsored?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FlyerMaxAggregateInputType = {
    id?: true
    title?: true
    storeId?: true
    imageUrl?: true
    startDate?: true
    endDate?: true
    isSponsored?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FlyerCountAggregateInputType = {
    id?: true
    title?: true
    storeId?: true
    imageUrl?: true
    startDate?: true
    endDate?: true
    isSponsored?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FlyerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flyer to aggregate.
     */
    where?: FlyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flyers to fetch.
     */
    orderBy?: FlyerOrderByWithRelationInput | FlyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flyers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Flyers
    **/
    _count?: true | FlyerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlyerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlyerMaxAggregateInputType
  }

  export type GetFlyerAggregateType<T extends FlyerAggregateArgs> = {
        [P in keyof T & keyof AggregateFlyer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlyer[P]>
      : GetScalarType<T[P], AggregateFlyer[P]>
  }




  export type FlyerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlyerWhereInput
    orderBy?: FlyerOrderByWithAggregationInput | FlyerOrderByWithAggregationInput[]
    by: FlyerScalarFieldEnum[] | FlyerScalarFieldEnum
    having?: FlyerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlyerCountAggregateInputType | true
    _min?: FlyerMinAggregateInputType
    _max?: FlyerMaxAggregateInputType
  }

  export type FlyerGroupByOutputType = {
    id: string
    title: string
    storeId: string
    imageUrl: string
    startDate: Date
    endDate: Date
    isSponsored: boolean
    createdAt: Date
    updatedAt: Date
    _count: FlyerCountAggregateOutputType | null
    _min: FlyerMinAggregateOutputType | null
    _max: FlyerMaxAggregateOutputType | null
  }

  type GetFlyerGroupByPayload<T extends FlyerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlyerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlyerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlyerGroupByOutputType[P]>
            : GetScalarType<T[P], FlyerGroupByOutputType[P]>
        }
      >
    >


  export type FlyerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    storeId?: boolean
    imageUrl?: boolean
    startDate?: boolean
    endDate?: boolean
    isSponsored?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    categories?: boolean | Flyer$categoriesArgs<ExtArgs>
    savedBy?: boolean | Flyer$savedByArgs<ExtArgs>
    items?: boolean | Flyer$itemsArgs<ExtArgs>
    _count?: boolean | FlyerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flyer"]>

  export type FlyerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    storeId?: boolean
    imageUrl?: boolean
    startDate?: boolean
    endDate?: boolean
    isSponsored?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flyer"]>

  export type FlyerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    storeId?: boolean
    imageUrl?: boolean
    startDate?: boolean
    endDate?: boolean
    isSponsored?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flyer"]>

  export type FlyerSelectScalar = {
    id?: boolean
    title?: boolean
    storeId?: boolean
    imageUrl?: boolean
    startDate?: boolean
    endDate?: boolean
    isSponsored?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FlyerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "storeId" | "imageUrl" | "startDate" | "endDate" | "isSponsored" | "createdAt" | "updatedAt", ExtArgs["result"]["flyer"]>
  export type FlyerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    categories?: boolean | Flyer$categoriesArgs<ExtArgs>
    savedBy?: boolean | Flyer$savedByArgs<ExtArgs>
    items?: boolean | Flyer$itemsArgs<ExtArgs>
    _count?: boolean | FlyerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FlyerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }
  export type FlyerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }

  export type $FlyerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Flyer"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      savedBy: Prisma.$UserPayload<ExtArgs>[]
      items: Prisma.$FlyerItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      storeId: string
      imageUrl: string
      startDate: Date
      endDate: Date
      isSponsored: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["flyer"]>
    composites: {}
  }

  type FlyerGetPayload<S extends boolean | null | undefined | FlyerDefaultArgs> = $Result.GetResult<Prisma.$FlyerPayload, S>

  type FlyerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlyerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlyerCountAggregateInputType | true
    }

  export interface FlyerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Flyer'], meta: { name: 'Flyer' } }
    /**
     * Find zero or one Flyer that matches the filter.
     * @param {FlyerFindUniqueArgs} args - Arguments to find a Flyer
     * @example
     * // Get one Flyer
     * const flyer = await prisma.flyer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlyerFindUniqueArgs>(args: SelectSubset<T, FlyerFindUniqueArgs<ExtArgs>>): Prisma__FlyerClient<$Result.GetResult<Prisma.$FlyerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flyer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlyerFindUniqueOrThrowArgs} args - Arguments to find a Flyer
     * @example
     * // Get one Flyer
     * const flyer = await prisma.flyer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlyerFindUniqueOrThrowArgs>(args: SelectSubset<T, FlyerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlyerClient<$Result.GetResult<Prisma.$FlyerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flyer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlyerFindFirstArgs} args - Arguments to find a Flyer
     * @example
     * // Get one Flyer
     * const flyer = await prisma.flyer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlyerFindFirstArgs>(args?: SelectSubset<T, FlyerFindFirstArgs<ExtArgs>>): Prisma__FlyerClient<$Result.GetResult<Prisma.$FlyerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flyer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlyerFindFirstOrThrowArgs} args - Arguments to find a Flyer
     * @example
     * // Get one Flyer
     * const flyer = await prisma.flyer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlyerFindFirstOrThrowArgs>(args?: SelectSubset<T, FlyerFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlyerClient<$Result.GetResult<Prisma.$FlyerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flyers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlyerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flyers
     * const flyers = await prisma.flyer.findMany()
     * 
     * // Get first 10 Flyers
     * const flyers = await prisma.flyer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flyerWithIdOnly = await prisma.flyer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlyerFindManyArgs>(args?: SelectSubset<T, FlyerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlyerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flyer.
     * @param {FlyerCreateArgs} args - Arguments to create a Flyer.
     * @example
     * // Create one Flyer
     * const Flyer = await prisma.flyer.create({
     *   data: {
     *     // ... data to create a Flyer
     *   }
     * })
     * 
     */
    create<T extends FlyerCreateArgs>(args: SelectSubset<T, FlyerCreateArgs<ExtArgs>>): Prisma__FlyerClient<$Result.GetResult<Prisma.$FlyerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flyers.
     * @param {FlyerCreateManyArgs} args - Arguments to create many Flyers.
     * @example
     * // Create many Flyers
     * const flyer = await prisma.flyer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlyerCreateManyArgs>(args?: SelectSubset<T, FlyerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Flyers and returns the data saved in the database.
     * @param {FlyerCreateManyAndReturnArgs} args - Arguments to create many Flyers.
     * @example
     * // Create many Flyers
     * const flyer = await prisma.flyer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Flyers and only return the `id`
     * const flyerWithIdOnly = await prisma.flyer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlyerCreateManyAndReturnArgs>(args?: SelectSubset<T, FlyerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlyerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Flyer.
     * @param {FlyerDeleteArgs} args - Arguments to delete one Flyer.
     * @example
     * // Delete one Flyer
     * const Flyer = await prisma.flyer.delete({
     *   where: {
     *     // ... filter to delete one Flyer
     *   }
     * })
     * 
     */
    delete<T extends FlyerDeleteArgs>(args: SelectSubset<T, FlyerDeleteArgs<ExtArgs>>): Prisma__FlyerClient<$Result.GetResult<Prisma.$FlyerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flyer.
     * @param {FlyerUpdateArgs} args - Arguments to update one Flyer.
     * @example
     * // Update one Flyer
     * const flyer = await prisma.flyer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlyerUpdateArgs>(args: SelectSubset<T, FlyerUpdateArgs<ExtArgs>>): Prisma__FlyerClient<$Result.GetResult<Prisma.$FlyerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flyers.
     * @param {FlyerDeleteManyArgs} args - Arguments to filter Flyers to delete.
     * @example
     * // Delete a few Flyers
     * const { count } = await prisma.flyer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlyerDeleteManyArgs>(args?: SelectSubset<T, FlyerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flyers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlyerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flyers
     * const flyer = await prisma.flyer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlyerUpdateManyArgs>(args: SelectSubset<T, FlyerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flyers and returns the data updated in the database.
     * @param {FlyerUpdateManyAndReturnArgs} args - Arguments to update many Flyers.
     * @example
     * // Update many Flyers
     * const flyer = await prisma.flyer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Flyers and only return the `id`
     * const flyerWithIdOnly = await prisma.flyer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FlyerUpdateManyAndReturnArgs>(args: SelectSubset<T, FlyerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlyerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Flyer.
     * @param {FlyerUpsertArgs} args - Arguments to update or create a Flyer.
     * @example
     * // Update or create a Flyer
     * const flyer = await prisma.flyer.upsert({
     *   create: {
     *     // ... data to create a Flyer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flyer we want to update
     *   }
     * })
     */
    upsert<T extends FlyerUpsertArgs>(args: SelectSubset<T, FlyerUpsertArgs<ExtArgs>>): Prisma__FlyerClient<$Result.GetResult<Prisma.$FlyerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flyers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlyerCountArgs} args - Arguments to filter Flyers to count.
     * @example
     * // Count the number of Flyers
     * const count = await prisma.flyer.count({
     *   where: {
     *     // ... the filter for the Flyers we want to count
     *   }
     * })
    **/
    count<T extends FlyerCountArgs>(
      args?: Subset<T, FlyerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlyerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flyer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlyerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlyerAggregateArgs>(args: Subset<T, FlyerAggregateArgs>): Prisma.PrismaPromise<GetFlyerAggregateType<T>>

    /**
     * Group by Flyer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlyerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FlyerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlyerGroupByArgs['orderBy'] }
        : { orderBy?: FlyerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FlyerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlyerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Flyer model
   */
  readonly fields: FlyerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Flyer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlyerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categories<T extends Flyer$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Flyer$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    savedBy<T extends Flyer$savedByArgs<ExtArgs> = {}>(args?: Subset<T, Flyer$savedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    items<T extends Flyer$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Flyer$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlyerItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Flyer model
   */
  interface FlyerFieldRefs {
    readonly id: FieldRef<"Flyer", 'String'>
    readonly title: FieldRef<"Flyer", 'String'>
    readonly storeId: FieldRef<"Flyer", 'String'>
    readonly imageUrl: FieldRef<"Flyer", 'String'>
    readonly startDate: FieldRef<"Flyer", 'DateTime'>
    readonly endDate: FieldRef<"Flyer", 'DateTime'>
    readonly isSponsored: FieldRef<"Flyer", 'Boolean'>
    readonly createdAt: FieldRef<"Flyer", 'DateTime'>
    readonly updatedAt: FieldRef<"Flyer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Flyer findUnique
   */
  export type FlyerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flyer
     */
    select?: FlyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flyer
     */
    omit?: FlyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlyerInclude<ExtArgs> | null
    /**
     * Filter, which Flyer to fetch.
     */
    where: FlyerWhereUniqueInput
  }

  /**
   * Flyer findUniqueOrThrow
   */
  export type FlyerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flyer
     */
    select?: FlyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flyer
     */
    omit?: FlyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlyerInclude<ExtArgs> | null
    /**
     * Filter, which Flyer to fetch.
     */
    where: FlyerWhereUniqueInput
  }

  /**
   * Flyer findFirst
   */
  export type FlyerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flyer
     */
    select?: FlyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flyer
     */
    omit?: FlyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlyerInclude<ExtArgs> | null
    /**
     * Filter, which Flyer to fetch.
     */
    where?: FlyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flyers to fetch.
     */
    orderBy?: FlyerOrderByWithRelationInput | FlyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flyers.
     */
    cursor?: FlyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flyers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flyers.
     */
    distinct?: FlyerScalarFieldEnum | FlyerScalarFieldEnum[]
  }

  /**
   * Flyer findFirstOrThrow
   */
  export type FlyerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flyer
     */
    select?: FlyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flyer
     */
    omit?: FlyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlyerInclude<ExtArgs> | null
    /**
     * Filter, which Flyer to fetch.
     */
    where?: FlyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flyers to fetch.
     */
    orderBy?: FlyerOrderByWithRelationInput | FlyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flyers.
     */
    cursor?: FlyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flyers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flyers.
     */
    distinct?: FlyerScalarFieldEnum | FlyerScalarFieldEnum[]
  }

  /**
   * Flyer findMany
   */
  export type FlyerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flyer
     */
    select?: FlyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flyer
     */
    omit?: FlyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlyerInclude<ExtArgs> | null
    /**
     * Filter, which Flyers to fetch.
     */
    where?: FlyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flyers to fetch.
     */
    orderBy?: FlyerOrderByWithRelationInput | FlyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Flyers.
     */
    cursor?: FlyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flyers.
     */
    skip?: number
    distinct?: FlyerScalarFieldEnum | FlyerScalarFieldEnum[]
  }

  /**
   * Flyer create
   */
  export type FlyerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flyer
     */
    select?: FlyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flyer
     */
    omit?: FlyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlyerInclude<ExtArgs> | null
    /**
     * The data needed to create a Flyer.
     */
    data: XOR<FlyerCreateInput, FlyerUncheckedCreateInput>
  }

  /**
   * Flyer createMany
   */
  export type FlyerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Flyers.
     */
    data: FlyerCreateManyInput | FlyerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Flyer createManyAndReturn
   */
  export type FlyerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flyer
     */
    select?: FlyerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flyer
     */
    omit?: FlyerOmit<ExtArgs> | null
    /**
     * The data used to create many Flyers.
     */
    data: FlyerCreateManyInput | FlyerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlyerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Flyer update
   */
  export type FlyerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flyer
     */
    select?: FlyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flyer
     */
    omit?: FlyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlyerInclude<ExtArgs> | null
    /**
     * The data needed to update a Flyer.
     */
    data: XOR<FlyerUpdateInput, FlyerUncheckedUpdateInput>
    /**
     * Choose, which Flyer to update.
     */
    where: FlyerWhereUniqueInput
  }

  /**
   * Flyer updateMany
   */
  export type FlyerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Flyers.
     */
    data: XOR<FlyerUpdateManyMutationInput, FlyerUncheckedUpdateManyInput>
    /**
     * Filter which Flyers to update
     */
    where?: FlyerWhereInput
    /**
     * Limit how many Flyers to update.
     */
    limit?: number
  }

  /**
   * Flyer updateManyAndReturn
   */
  export type FlyerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flyer
     */
    select?: FlyerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flyer
     */
    omit?: FlyerOmit<ExtArgs> | null
    /**
     * The data used to update Flyers.
     */
    data: XOR<FlyerUpdateManyMutationInput, FlyerUncheckedUpdateManyInput>
    /**
     * Filter which Flyers to update
     */
    where?: FlyerWhereInput
    /**
     * Limit how many Flyers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlyerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Flyer upsert
   */
  export type FlyerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flyer
     */
    select?: FlyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flyer
     */
    omit?: FlyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlyerInclude<ExtArgs> | null
    /**
     * The filter to search for the Flyer to update in case it exists.
     */
    where: FlyerWhereUniqueInput
    /**
     * In case the Flyer found by the `where` argument doesn't exist, create a new Flyer with this data.
     */
    create: XOR<FlyerCreateInput, FlyerUncheckedCreateInput>
    /**
     * In case the Flyer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlyerUpdateInput, FlyerUncheckedUpdateInput>
  }

  /**
   * Flyer delete
   */
  export type FlyerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flyer
     */
    select?: FlyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flyer
     */
    omit?: FlyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlyerInclude<ExtArgs> | null
    /**
     * Filter which Flyer to delete.
     */
    where: FlyerWhereUniqueInput
  }

  /**
   * Flyer deleteMany
   */
  export type FlyerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flyers to delete
     */
    where?: FlyerWhereInput
    /**
     * Limit how many Flyers to delete.
     */
    limit?: number
  }

  /**
   * Flyer.categories
   */
  export type Flyer$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Flyer.savedBy
   */
  export type Flyer$savedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Flyer.items
   */
  export type Flyer$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlyerItem
     */
    select?: FlyerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlyerItem
     */
    omit?: FlyerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlyerItemInclude<ExtArgs> | null
    where?: FlyerItemWhereInput
    orderBy?: FlyerItemOrderByWithRelationInput | FlyerItemOrderByWithRelationInput[]
    cursor?: FlyerItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlyerItemScalarFieldEnum | FlyerItemScalarFieldEnum[]
  }

  /**
   * Flyer without action
   */
  export type FlyerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flyer
     */
    select?: FlyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flyer
     */
    omit?: FlyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlyerInclude<ExtArgs> | null
  }


  /**
   * Model FlyerItem
   */

  export type AggregateFlyerItem = {
    _count: FlyerItemCountAggregateOutputType | null
    _avg: FlyerItemAvgAggregateOutputType | null
    _sum: FlyerItemSumAggregateOutputType | null
    _min: FlyerItemMinAggregateOutputType | null
    _max: FlyerItemMaxAggregateOutputType | null
  }

  export type FlyerItemAvgAggregateOutputType = {
    price: number | null
    oldPrice: number | null
  }

  export type FlyerItemSumAggregateOutputType = {
    price: number | null
    oldPrice: number | null
  }

  export type FlyerItemMinAggregateOutputType = {
    id: string | null
    flyerId: string | null
    name: string | null
    price: number | null
    oldPrice: number | null
    imageUrl: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlyerItemMaxAggregateOutputType = {
    id: string | null
    flyerId: string | null
    name: string | null
    price: number | null
    oldPrice: number | null
    imageUrl: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlyerItemCountAggregateOutputType = {
    id: number
    flyerId: number
    name: number
    price: number
    oldPrice: number
    imageUrl: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FlyerItemAvgAggregateInputType = {
    price?: true
    oldPrice?: true
  }

  export type FlyerItemSumAggregateInputType = {
    price?: true
    oldPrice?: true
  }

  export type FlyerItemMinAggregateInputType = {
    id?: true
    flyerId?: true
    name?: true
    price?: true
    oldPrice?: true
    imageUrl?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FlyerItemMaxAggregateInputType = {
    id?: true
    flyerId?: true
    name?: true
    price?: true
    oldPrice?: true
    imageUrl?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FlyerItemCountAggregateInputType = {
    id?: true
    flyerId?: true
    name?: true
    price?: true
    oldPrice?: true
    imageUrl?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FlyerItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlyerItem to aggregate.
     */
    where?: FlyerItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlyerItems to fetch.
     */
    orderBy?: FlyerItemOrderByWithRelationInput | FlyerItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlyerItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlyerItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlyerItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlyerItems
    **/
    _count?: true | FlyerItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlyerItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlyerItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlyerItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlyerItemMaxAggregateInputType
  }

  export type GetFlyerItemAggregateType<T extends FlyerItemAggregateArgs> = {
        [P in keyof T & keyof AggregateFlyerItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlyerItem[P]>
      : GetScalarType<T[P], AggregateFlyerItem[P]>
  }




  export type FlyerItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlyerItemWhereInput
    orderBy?: FlyerItemOrderByWithAggregationInput | FlyerItemOrderByWithAggregationInput[]
    by: FlyerItemScalarFieldEnum[] | FlyerItemScalarFieldEnum
    having?: FlyerItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlyerItemCountAggregateInputType | true
    _avg?: FlyerItemAvgAggregateInputType
    _sum?: FlyerItemSumAggregateInputType
    _min?: FlyerItemMinAggregateInputType
    _max?: FlyerItemMaxAggregateInputType
  }

  export type FlyerItemGroupByOutputType = {
    id: string
    flyerId: string
    name: string
    price: number
    oldPrice: number | null
    imageUrl: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: FlyerItemCountAggregateOutputType | null
    _avg: FlyerItemAvgAggregateOutputType | null
    _sum: FlyerItemSumAggregateOutputType | null
    _min: FlyerItemMinAggregateOutputType | null
    _max: FlyerItemMaxAggregateOutputType | null
  }

  type GetFlyerItemGroupByPayload<T extends FlyerItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlyerItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlyerItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlyerItemGroupByOutputType[P]>
            : GetScalarType<T[P], FlyerItemGroupByOutputType[P]>
        }
      >
    >


  export type FlyerItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flyerId?: boolean
    name?: boolean
    price?: boolean
    oldPrice?: boolean
    imageUrl?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    flyer?: boolean | FlyerDefaultArgs<ExtArgs>
    shoppingListItems?: boolean | FlyerItem$shoppingListItemsArgs<ExtArgs>
    wishlistItems?: boolean | FlyerItem$wishlistItemsArgs<ExtArgs>
    _count?: boolean | FlyerItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flyerItem"]>

  export type FlyerItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flyerId?: boolean
    name?: boolean
    price?: boolean
    oldPrice?: boolean
    imageUrl?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    flyer?: boolean | FlyerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flyerItem"]>

  export type FlyerItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flyerId?: boolean
    name?: boolean
    price?: boolean
    oldPrice?: boolean
    imageUrl?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    flyer?: boolean | FlyerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flyerItem"]>

  export type FlyerItemSelectScalar = {
    id?: boolean
    flyerId?: boolean
    name?: boolean
    price?: boolean
    oldPrice?: boolean
    imageUrl?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FlyerItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "flyerId" | "name" | "price" | "oldPrice" | "imageUrl" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["flyerItem"]>
  export type FlyerItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flyer?: boolean | FlyerDefaultArgs<ExtArgs>
    shoppingListItems?: boolean | FlyerItem$shoppingListItemsArgs<ExtArgs>
    wishlistItems?: boolean | FlyerItem$wishlistItemsArgs<ExtArgs>
    _count?: boolean | FlyerItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FlyerItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flyer?: boolean | FlyerDefaultArgs<ExtArgs>
  }
  export type FlyerItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flyer?: boolean | FlyerDefaultArgs<ExtArgs>
  }

  export type $FlyerItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FlyerItem"
    objects: {
      flyer: Prisma.$FlyerPayload<ExtArgs>
      shoppingListItems: Prisma.$ShoppingListItemPayload<ExtArgs>[]
      wishlistItems: Prisma.$WishlistItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      flyerId: string
      name: string
      price: number
      oldPrice: number | null
      imageUrl: string | null
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["flyerItem"]>
    composites: {}
  }

  type FlyerItemGetPayload<S extends boolean | null | undefined | FlyerItemDefaultArgs> = $Result.GetResult<Prisma.$FlyerItemPayload, S>

  type FlyerItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlyerItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlyerItemCountAggregateInputType | true
    }

  export interface FlyerItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FlyerItem'], meta: { name: 'FlyerItem' } }
    /**
     * Find zero or one FlyerItem that matches the filter.
     * @param {FlyerItemFindUniqueArgs} args - Arguments to find a FlyerItem
     * @example
     * // Get one FlyerItem
     * const flyerItem = await prisma.flyerItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlyerItemFindUniqueArgs>(args: SelectSubset<T, FlyerItemFindUniqueArgs<ExtArgs>>): Prisma__FlyerItemClient<$Result.GetResult<Prisma.$FlyerItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FlyerItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlyerItemFindUniqueOrThrowArgs} args - Arguments to find a FlyerItem
     * @example
     * // Get one FlyerItem
     * const flyerItem = await prisma.flyerItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlyerItemFindUniqueOrThrowArgs>(args: SelectSubset<T, FlyerItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlyerItemClient<$Result.GetResult<Prisma.$FlyerItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlyerItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlyerItemFindFirstArgs} args - Arguments to find a FlyerItem
     * @example
     * // Get one FlyerItem
     * const flyerItem = await prisma.flyerItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlyerItemFindFirstArgs>(args?: SelectSubset<T, FlyerItemFindFirstArgs<ExtArgs>>): Prisma__FlyerItemClient<$Result.GetResult<Prisma.$FlyerItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlyerItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlyerItemFindFirstOrThrowArgs} args - Arguments to find a FlyerItem
     * @example
     * // Get one FlyerItem
     * const flyerItem = await prisma.flyerItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlyerItemFindFirstOrThrowArgs>(args?: SelectSubset<T, FlyerItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlyerItemClient<$Result.GetResult<Prisma.$FlyerItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FlyerItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlyerItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlyerItems
     * const flyerItems = await prisma.flyerItem.findMany()
     * 
     * // Get first 10 FlyerItems
     * const flyerItems = await prisma.flyerItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flyerItemWithIdOnly = await prisma.flyerItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlyerItemFindManyArgs>(args?: SelectSubset<T, FlyerItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlyerItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FlyerItem.
     * @param {FlyerItemCreateArgs} args - Arguments to create a FlyerItem.
     * @example
     * // Create one FlyerItem
     * const FlyerItem = await prisma.flyerItem.create({
     *   data: {
     *     // ... data to create a FlyerItem
     *   }
     * })
     * 
     */
    create<T extends FlyerItemCreateArgs>(args: SelectSubset<T, FlyerItemCreateArgs<ExtArgs>>): Prisma__FlyerItemClient<$Result.GetResult<Prisma.$FlyerItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FlyerItems.
     * @param {FlyerItemCreateManyArgs} args - Arguments to create many FlyerItems.
     * @example
     * // Create many FlyerItems
     * const flyerItem = await prisma.flyerItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlyerItemCreateManyArgs>(args?: SelectSubset<T, FlyerItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FlyerItems and returns the data saved in the database.
     * @param {FlyerItemCreateManyAndReturnArgs} args - Arguments to create many FlyerItems.
     * @example
     * // Create many FlyerItems
     * const flyerItem = await prisma.flyerItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FlyerItems and only return the `id`
     * const flyerItemWithIdOnly = await prisma.flyerItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlyerItemCreateManyAndReturnArgs>(args?: SelectSubset<T, FlyerItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlyerItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FlyerItem.
     * @param {FlyerItemDeleteArgs} args - Arguments to delete one FlyerItem.
     * @example
     * // Delete one FlyerItem
     * const FlyerItem = await prisma.flyerItem.delete({
     *   where: {
     *     // ... filter to delete one FlyerItem
     *   }
     * })
     * 
     */
    delete<T extends FlyerItemDeleteArgs>(args: SelectSubset<T, FlyerItemDeleteArgs<ExtArgs>>): Prisma__FlyerItemClient<$Result.GetResult<Prisma.$FlyerItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FlyerItem.
     * @param {FlyerItemUpdateArgs} args - Arguments to update one FlyerItem.
     * @example
     * // Update one FlyerItem
     * const flyerItem = await prisma.flyerItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlyerItemUpdateArgs>(args: SelectSubset<T, FlyerItemUpdateArgs<ExtArgs>>): Prisma__FlyerItemClient<$Result.GetResult<Prisma.$FlyerItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FlyerItems.
     * @param {FlyerItemDeleteManyArgs} args - Arguments to filter FlyerItems to delete.
     * @example
     * // Delete a few FlyerItems
     * const { count } = await prisma.flyerItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlyerItemDeleteManyArgs>(args?: SelectSubset<T, FlyerItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlyerItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlyerItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlyerItems
     * const flyerItem = await prisma.flyerItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlyerItemUpdateManyArgs>(args: SelectSubset<T, FlyerItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlyerItems and returns the data updated in the database.
     * @param {FlyerItemUpdateManyAndReturnArgs} args - Arguments to update many FlyerItems.
     * @example
     * // Update many FlyerItems
     * const flyerItem = await prisma.flyerItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FlyerItems and only return the `id`
     * const flyerItemWithIdOnly = await prisma.flyerItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FlyerItemUpdateManyAndReturnArgs>(args: SelectSubset<T, FlyerItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlyerItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FlyerItem.
     * @param {FlyerItemUpsertArgs} args - Arguments to update or create a FlyerItem.
     * @example
     * // Update or create a FlyerItem
     * const flyerItem = await prisma.flyerItem.upsert({
     *   create: {
     *     // ... data to create a FlyerItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlyerItem we want to update
     *   }
     * })
     */
    upsert<T extends FlyerItemUpsertArgs>(args: SelectSubset<T, FlyerItemUpsertArgs<ExtArgs>>): Prisma__FlyerItemClient<$Result.GetResult<Prisma.$FlyerItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FlyerItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlyerItemCountArgs} args - Arguments to filter FlyerItems to count.
     * @example
     * // Count the number of FlyerItems
     * const count = await prisma.flyerItem.count({
     *   where: {
     *     // ... the filter for the FlyerItems we want to count
     *   }
     * })
    **/
    count<T extends FlyerItemCountArgs>(
      args?: Subset<T, FlyerItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlyerItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlyerItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlyerItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlyerItemAggregateArgs>(args: Subset<T, FlyerItemAggregateArgs>): Prisma.PrismaPromise<GetFlyerItemAggregateType<T>>

    /**
     * Group by FlyerItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlyerItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FlyerItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlyerItemGroupByArgs['orderBy'] }
        : { orderBy?: FlyerItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FlyerItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlyerItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FlyerItem model
   */
  readonly fields: FlyerItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FlyerItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlyerItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flyer<T extends FlyerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FlyerDefaultArgs<ExtArgs>>): Prisma__FlyerClient<$Result.GetResult<Prisma.$FlyerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shoppingListItems<T extends FlyerItem$shoppingListItemsArgs<ExtArgs> = {}>(args?: Subset<T, FlyerItem$shoppingListItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wishlistItems<T extends FlyerItem$wishlistItemsArgs<ExtArgs> = {}>(args?: Subset<T, FlyerItem$wishlistItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FlyerItem model
   */
  interface FlyerItemFieldRefs {
    readonly id: FieldRef<"FlyerItem", 'String'>
    readonly flyerId: FieldRef<"FlyerItem", 'String'>
    readonly name: FieldRef<"FlyerItem", 'String'>
    readonly price: FieldRef<"FlyerItem", 'Float'>
    readonly oldPrice: FieldRef<"FlyerItem", 'Float'>
    readonly imageUrl: FieldRef<"FlyerItem", 'String'>
    readonly description: FieldRef<"FlyerItem", 'String'>
    readonly createdAt: FieldRef<"FlyerItem", 'DateTime'>
    readonly updatedAt: FieldRef<"FlyerItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FlyerItem findUnique
   */
  export type FlyerItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlyerItem
     */
    select?: FlyerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlyerItem
     */
    omit?: FlyerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlyerItemInclude<ExtArgs> | null
    /**
     * Filter, which FlyerItem to fetch.
     */
    where: FlyerItemWhereUniqueInput
  }

  /**
   * FlyerItem findUniqueOrThrow
   */
  export type FlyerItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlyerItem
     */
    select?: FlyerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlyerItem
     */
    omit?: FlyerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlyerItemInclude<ExtArgs> | null
    /**
     * Filter, which FlyerItem to fetch.
     */
    where: FlyerItemWhereUniqueInput
  }

  /**
   * FlyerItem findFirst
   */
  export type FlyerItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlyerItem
     */
    select?: FlyerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlyerItem
     */
    omit?: FlyerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlyerItemInclude<ExtArgs> | null
    /**
     * Filter, which FlyerItem to fetch.
     */
    where?: FlyerItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlyerItems to fetch.
     */
    orderBy?: FlyerItemOrderByWithRelationInput | FlyerItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlyerItems.
     */
    cursor?: FlyerItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlyerItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlyerItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlyerItems.
     */
    distinct?: FlyerItemScalarFieldEnum | FlyerItemScalarFieldEnum[]
  }

  /**
   * FlyerItem findFirstOrThrow
   */
  export type FlyerItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlyerItem
     */
    select?: FlyerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlyerItem
     */
    omit?: FlyerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlyerItemInclude<ExtArgs> | null
    /**
     * Filter, which FlyerItem to fetch.
     */
    where?: FlyerItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlyerItems to fetch.
     */
    orderBy?: FlyerItemOrderByWithRelationInput | FlyerItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlyerItems.
     */
    cursor?: FlyerItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlyerItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlyerItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlyerItems.
     */
    distinct?: FlyerItemScalarFieldEnum | FlyerItemScalarFieldEnum[]
  }

  /**
   * FlyerItem findMany
   */
  export type FlyerItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlyerItem
     */
    select?: FlyerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlyerItem
     */
    omit?: FlyerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlyerItemInclude<ExtArgs> | null
    /**
     * Filter, which FlyerItems to fetch.
     */
    where?: FlyerItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlyerItems to fetch.
     */
    orderBy?: FlyerItemOrderByWithRelationInput | FlyerItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlyerItems.
     */
    cursor?: FlyerItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlyerItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlyerItems.
     */
    skip?: number
    distinct?: FlyerItemScalarFieldEnum | FlyerItemScalarFieldEnum[]
  }

  /**
   * FlyerItem create
   */
  export type FlyerItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlyerItem
     */
    select?: FlyerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlyerItem
     */
    omit?: FlyerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlyerItemInclude<ExtArgs> | null
    /**
     * The data needed to create a FlyerItem.
     */
    data: XOR<FlyerItemCreateInput, FlyerItemUncheckedCreateInput>
  }

  /**
   * FlyerItem createMany
   */
  export type FlyerItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlyerItems.
     */
    data: FlyerItemCreateManyInput | FlyerItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FlyerItem createManyAndReturn
   */
  export type FlyerItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlyerItem
     */
    select?: FlyerItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlyerItem
     */
    omit?: FlyerItemOmit<ExtArgs> | null
    /**
     * The data used to create many FlyerItems.
     */
    data: FlyerItemCreateManyInput | FlyerItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlyerItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlyerItem update
   */
  export type FlyerItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlyerItem
     */
    select?: FlyerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlyerItem
     */
    omit?: FlyerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlyerItemInclude<ExtArgs> | null
    /**
     * The data needed to update a FlyerItem.
     */
    data: XOR<FlyerItemUpdateInput, FlyerItemUncheckedUpdateInput>
    /**
     * Choose, which FlyerItem to update.
     */
    where: FlyerItemWhereUniqueInput
  }

  /**
   * FlyerItem updateMany
   */
  export type FlyerItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FlyerItems.
     */
    data: XOR<FlyerItemUpdateManyMutationInput, FlyerItemUncheckedUpdateManyInput>
    /**
     * Filter which FlyerItems to update
     */
    where?: FlyerItemWhereInput
    /**
     * Limit how many FlyerItems to update.
     */
    limit?: number
  }

  /**
   * FlyerItem updateManyAndReturn
   */
  export type FlyerItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlyerItem
     */
    select?: FlyerItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlyerItem
     */
    omit?: FlyerItemOmit<ExtArgs> | null
    /**
     * The data used to update FlyerItems.
     */
    data: XOR<FlyerItemUpdateManyMutationInput, FlyerItemUncheckedUpdateManyInput>
    /**
     * Filter which FlyerItems to update
     */
    where?: FlyerItemWhereInput
    /**
     * Limit how many FlyerItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlyerItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlyerItem upsert
   */
  export type FlyerItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlyerItem
     */
    select?: FlyerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlyerItem
     */
    omit?: FlyerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlyerItemInclude<ExtArgs> | null
    /**
     * The filter to search for the FlyerItem to update in case it exists.
     */
    where: FlyerItemWhereUniqueInput
    /**
     * In case the FlyerItem found by the `where` argument doesn't exist, create a new FlyerItem with this data.
     */
    create: XOR<FlyerItemCreateInput, FlyerItemUncheckedCreateInput>
    /**
     * In case the FlyerItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlyerItemUpdateInput, FlyerItemUncheckedUpdateInput>
  }

  /**
   * FlyerItem delete
   */
  export type FlyerItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlyerItem
     */
    select?: FlyerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlyerItem
     */
    omit?: FlyerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlyerItemInclude<ExtArgs> | null
    /**
     * Filter which FlyerItem to delete.
     */
    where: FlyerItemWhereUniqueInput
  }

  /**
   * FlyerItem deleteMany
   */
  export type FlyerItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlyerItems to delete
     */
    where?: FlyerItemWhereInput
    /**
     * Limit how many FlyerItems to delete.
     */
    limit?: number
  }

  /**
   * FlyerItem.shoppingListItems
   */
  export type FlyerItem$shoppingListItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemInclude<ExtArgs> | null
    where?: ShoppingListItemWhereInput
    orderBy?: ShoppingListItemOrderByWithRelationInput | ShoppingListItemOrderByWithRelationInput[]
    cursor?: ShoppingListItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShoppingListItemScalarFieldEnum | ShoppingListItemScalarFieldEnum[]
  }

  /**
   * FlyerItem.wishlistItems
   */
  export type FlyerItem$wishlistItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
    where?: WishlistItemWhereInput
    orderBy?: WishlistItemOrderByWithRelationInput | WishlistItemOrderByWithRelationInput[]
    cursor?: WishlistItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WishlistItemScalarFieldEnum | WishlistItemScalarFieldEnum[]
  }

  /**
   * FlyerItem without action
   */
  export type FlyerItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlyerItem
     */
    select?: FlyerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlyerItem
     */
    omit?: FlyerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlyerItemInclude<ExtArgs> | null
  }


  /**
   * Model Coupon
   */

  export type AggregateCoupon = {
    _count: CouponCountAggregateOutputType | null
    _min: CouponMinAggregateOutputType | null
    _max: CouponMaxAggregateOutputType | null
  }

  export type CouponMinAggregateOutputType = {
    id: string | null
    title: string | null
    storeId: string | null
    code: string | null
    barcodeUrl: string | null
    qrCodeUrl: string | null
    discount: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    isOnline: boolean | null
    isInStore: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CouponMaxAggregateOutputType = {
    id: string | null
    title: string | null
    storeId: string | null
    code: string | null
    barcodeUrl: string | null
    qrCodeUrl: string | null
    discount: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    isOnline: boolean | null
    isInStore: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CouponCountAggregateOutputType = {
    id: number
    title: number
    storeId: number
    code: number
    barcodeUrl: number
    qrCodeUrl: number
    discount: number
    description: number
    startDate: number
    endDate: number
    isOnline: number
    isInStore: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CouponMinAggregateInputType = {
    id?: true
    title?: true
    storeId?: true
    code?: true
    barcodeUrl?: true
    qrCodeUrl?: true
    discount?: true
    description?: true
    startDate?: true
    endDate?: true
    isOnline?: true
    isInStore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CouponMaxAggregateInputType = {
    id?: true
    title?: true
    storeId?: true
    code?: true
    barcodeUrl?: true
    qrCodeUrl?: true
    discount?: true
    description?: true
    startDate?: true
    endDate?: true
    isOnline?: true
    isInStore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CouponCountAggregateInputType = {
    id?: true
    title?: true
    storeId?: true
    code?: true
    barcodeUrl?: true
    qrCodeUrl?: true
    discount?: true
    description?: true
    startDate?: true
    endDate?: true
    isOnline?: true
    isInStore?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CouponAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coupon to aggregate.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coupons
    **/
    _count?: true | CouponCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CouponMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CouponMaxAggregateInputType
  }

  export type GetCouponAggregateType<T extends CouponAggregateArgs> = {
        [P in keyof T & keyof AggregateCoupon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoupon[P]>
      : GetScalarType<T[P], AggregateCoupon[P]>
  }




  export type CouponGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CouponWhereInput
    orderBy?: CouponOrderByWithAggregationInput | CouponOrderByWithAggregationInput[]
    by: CouponScalarFieldEnum[] | CouponScalarFieldEnum
    having?: CouponScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CouponCountAggregateInputType | true
    _min?: CouponMinAggregateInputType
    _max?: CouponMaxAggregateInputType
  }

  export type CouponGroupByOutputType = {
    id: string
    title: string
    storeId: string
    code: string | null
    barcodeUrl: string | null
    qrCodeUrl: string | null
    discount: string
    description: string | null
    startDate: Date
    endDate: Date
    isOnline: boolean
    isInStore: boolean
    createdAt: Date
    updatedAt: Date
    _count: CouponCountAggregateOutputType | null
    _min: CouponMinAggregateOutputType | null
    _max: CouponMaxAggregateOutputType | null
  }

  type GetCouponGroupByPayload<T extends CouponGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CouponGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CouponGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CouponGroupByOutputType[P]>
            : GetScalarType<T[P], CouponGroupByOutputType[P]>
        }
      >
    >


  export type CouponSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    storeId?: boolean
    code?: boolean
    barcodeUrl?: boolean
    qrCodeUrl?: boolean
    discount?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    isOnline?: boolean
    isInStore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    categories?: boolean | Coupon$categoriesArgs<ExtArgs>
    savedBy?: boolean | Coupon$savedByArgs<ExtArgs>
    _count?: boolean | CouponCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coupon"]>

  export type CouponSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    storeId?: boolean
    code?: boolean
    barcodeUrl?: boolean
    qrCodeUrl?: boolean
    discount?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    isOnline?: boolean
    isInStore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coupon"]>

  export type CouponSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    storeId?: boolean
    code?: boolean
    barcodeUrl?: boolean
    qrCodeUrl?: boolean
    discount?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    isOnline?: boolean
    isInStore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coupon"]>

  export type CouponSelectScalar = {
    id?: boolean
    title?: boolean
    storeId?: boolean
    code?: boolean
    barcodeUrl?: boolean
    qrCodeUrl?: boolean
    discount?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    isOnline?: boolean
    isInStore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CouponOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "storeId" | "code" | "barcodeUrl" | "qrCodeUrl" | "discount" | "description" | "startDate" | "endDate" | "isOnline" | "isInStore" | "createdAt" | "updatedAt", ExtArgs["result"]["coupon"]>
  export type CouponInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    categories?: boolean | Coupon$categoriesArgs<ExtArgs>
    savedBy?: boolean | Coupon$savedByArgs<ExtArgs>
    _count?: boolean | CouponCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CouponIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }
  export type CouponIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }

  export type $CouponPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coupon"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      savedBy: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      storeId: string
      code: string | null
      barcodeUrl: string | null
      qrCodeUrl: string | null
      discount: string
      description: string | null
      startDate: Date
      endDate: Date
      isOnline: boolean
      isInStore: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["coupon"]>
    composites: {}
  }

  type CouponGetPayload<S extends boolean | null | undefined | CouponDefaultArgs> = $Result.GetResult<Prisma.$CouponPayload, S>

  type CouponCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CouponFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CouponCountAggregateInputType | true
    }

  export interface CouponDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coupon'], meta: { name: 'Coupon' } }
    /**
     * Find zero or one Coupon that matches the filter.
     * @param {CouponFindUniqueArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CouponFindUniqueArgs>(args: SelectSubset<T, CouponFindUniqueArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Coupon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CouponFindUniqueOrThrowArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CouponFindUniqueOrThrowArgs>(args: SelectSubset<T, CouponFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coupon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindFirstArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CouponFindFirstArgs>(args?: SelectSubset<T, CouponFindFirstArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coupon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindFirstOrThrowArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CouponFindFirstOrThrowArgs>(args?: SelectSubset<T, CouponFindFirstOrThrowArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Coupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coupons
     * const coupons = await prisma.coupon.findMany()
     * 
     * // Get first 10 Coupons
     * const coupons = await prisma.coupon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const couponWithIdOnly = await prisma.coupon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CouponFindManyArgs>(args?: SelectSubset<T, CouponFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Coupon.
     * @param {CouponCreateArgs} args - Arguments to create a Coupon.
     * @example
     * // Create one Coupon
     * const Coupon = await prisma.coupon.create({
     *   data: {
     *     // ... data to create a Coupon
     *   }
     * })
     * 
     */
    create<T extends CouponCreateArgs>(args: SelectSubset<T, CouponCreateArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Coupons.
     * @param {CouponCreateManyArgs} args - Arguments to create many Coupons.
     * @example
     * // Create many Coupons
     * const coupon = await prisma.coupon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CouponCreateManyArgs>(args?: SelectSubset<T, CouponCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Coupons and returns the data saved in the database.
     * @param {CouponCreateManyAndReturnArgs} args - Arguments to create many Coupons.
     * @example
     * // Create many Coupons
     * const coupon = await prisma.coupon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Coupons and only return the `id`
     * const couponWithIdOnly = await prisma.coupon.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CouponCreateManyAndReturnArgs>(args?: SelectSubset<T, CouponCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Coupon.
     * @param {CouponDeleteArgs} args - Arguments to delete one Coupon.
     * @example
     * // Delete one Coupon
     * const Coupon = await prisma.coupon.delete({
     *   where: {
     *     // ... filter to delete one Coupon
     *   }
     * })
     * 
     */
    delete<T extends CouponDeleteArgs>(args: SelectSubset<T, CouponDeleteArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Coupon.
     * @param {CouponUpdateArgs} args - Arguments to update one Coupon.
     * @example
     * // Update one Coupon
     * const coupon = await prisma.coupon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CouponUpdateArgs>(args: SelectSubset<T, CouponUpdateArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Coupons.
     * @param {CouponDeleteManyArgs} args - Arguments to filter Coupons to delete.
     * @example
     * // Delete a few Coupons
     * const { count } = await prisma.coupon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CouponDeleteManyArgs>(args?: SelectSubset<T, CouponDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coupons
     * const coupon = await prisma.coupon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CouponUpdateManyArgs>(args: SelectSubset<T, CouponUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coupons and returns the data updated in the database.
     * @param {CouponUpdateManyAndReturnArgs} args - Arguments to update many Coupons.
     * @example
     * // Update many Coupons
     * const coupon = await prisma.coupon.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Coupons and only return the `id`
     * const couponWithIdOnly = await prisma.coupon.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CouponUpdateManyAndReturnArgs>(args: SelectSubset<T, CouponUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Coupon.
     * @param {CouponUpsertArgs} args - Arguments to update or create a Coupon.
     * @example
     * // Update or create a Coupon
     * const coupon = await prisma.coupon.upsert({
     *   create: {
     *     // ... data to create a Coupon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coupon we want to update
     *   }
     * })
     */
    upsert<T extends CouponUpsertArgs>(args: SelectSubset<T, CouponUpsertArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponCountArgs} args - Arguments to filter Coupons to count.
     * @example
     * // Count the number of Coupons
     * const count = await prisma.coupon.count({
     *   where: {
     *     // ... the filter for the Coupons we want to count
     *   }
     * })
    **/
    count<T extends CouponCountArgs>(
      args?: Subset<T, CouponCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CouponCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CouponAggregateArgs>(args: Subset<T, CouponAggregateArgs>): Prisma.PrismaPromise<GetCouponAggregateType<T>>

    /**
     * Group by Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CouponGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CouponGroupByArgs['orderBy'] }
        : { orderBy?: CouponGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CouponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCouponGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coupon model
   */
  readonly fields: CouponFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coupon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CouponClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categories<T extends Coupon$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Coupon$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    savedBy<T extends Coupon$savedByArgs<ExtArgs> = {}>(args?: Subset<T, Coupon$savedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Coupon model
   */
  interface CouponFieldRefs {
    readonly id: FieldRef<"Coupon", 'String'>
    readonly title: FieldRef<"Coupon", 'String'>
    readonly storeId: FieldRef<"Coupon", 'String'>
    readonly code: FieldRef<"Coupon", 'String'>
    readonly barcodeUrl: FieldRef<"Coupon", 'String'>
    readonly qrCodeUrl: FieldRef<"Coupon", 'String'>
    readonly discount: FieldRef<"Coupon", 'String'>
    readonly description: FieldRef<"Coupon", 'String'>
    readonly startDate: FieldRef<"Coupon", 'DateTime'>
    readonly endDate: FieldRef<"Coupon", 'DateTime'>
    readonly isOnline: FieldRef<"Coupon", 'Boolean'>
    readonly isInStore: FieldRef<"Coupon", 'Boolean'>
    readonly createdAt: FieldRef<"Coupon", 'DateTime'>
    readonly updatedAt: FieldRef<"Coupon", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Coupon findUnique
   */
  export type CouponFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon findUniqueOrThrow
   */
  export type CouponFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon findFirst
   */
  export type CouponFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     */
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon findFirstOrThrow
   */
  export type CouponFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     */
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon findMany
   */
  export type CouponFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupons to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon create
   */
  export type CouponCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * The data needed to create a Coupon.
     */
    data: XOR<CouponCreateInput, CouponUncheckedCreateInput>
  }

  /**
   * Coupon createMany
   */
  export type CouponCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Coupons.
     */
    data: CouponCreateManyInput | CouponCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coupon createManyAndReturn
   */
  export type CouponCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * The data used to create many Coupons.
     */
    data: CouponCreateManyInput | CouponCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Coupon update
   */
  export type CouponUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * The data needed to update a Coupon.
     */
    data: XOR<CouponUpdateInput, CouponUncheckedUpdateInput>
    /**
     * Choose, which Coupon to update.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon updateMany
   */
  export type CouponUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Coupons.
     */
    data: XOR<CouponUpdateManyMutationInput, CouponUncheckedUpdateManyInput>
    /**
     * Filter which Coupons to update
     */
    where?: CouponWhereInput
    /**
     * Limit how many Coupons to update.
     */
    limit?: number
  }

  /**
   * Coupon updateManyAndReturn
   */
  export type CouponUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * The data used to update Coupons.
     */
    data: XOR<CouponUpdateManyMutationInput, CouponUncheckedUpdateManyInput>
    /**
     * Filter which Coupons to update
     */
    where?: CouponWhereInput
    /**
     * Limit how many Coupons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Coupon upsert
   */
  export type CouponUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * The filter to search for the Coupon to update in case it exists.
     */
    where: CouponWhereUniqueInput
    /**
     * In case the Coupon found by the `where` argument doesn't exist, create a new Coupon with this data.
     */
    create: XOR<CouponCreateInput, CouponUncheckedCreateInput>
    /**
     * In case the Coupon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CouponUpdateInput, CouponUncheckedUpdateInput>
  }

  /**
   * Coupon delete
   */
  export type CouponDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter which Coupon to delete.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon deleteMany
   */
  export type CouponDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coupons to delete
     */
    where?: CouponWhereInput
    /**
     * Limit how many Coupons to delete.
     */
    limit?: number
  }

  /**
   * Coupon.categories
   */
  export type Coupon$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Coupon.savedBy
   */
  export type Coupon$savedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Coupon without action
   */
  export type CouponDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
  }


  /**
   * Model ShoppingList
   */

  export type AggregateShoppingList = {
    _count: ShoppingListCountAggregateOutputType | null
    _min: ShoppingListMinAggregateOutputType | null
    _max: ShoppingListMaxAggregateOutputType | null
  }

  export type ShoppingListMinAggregateOutputType = {
    id: string | null
    title: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShoppingListMaxAggregateOutputType = {
    id: string | null
    title: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShoppingListCountAggregateOutputType = {
    id: number
    title: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShoppingListMinAggregateInputType = {
    id?: true
    title?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShoppingListMaxAggregateInputType = {
    id?: true
    title?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShoppingListCountAggregateInputType = {
    id?: true
    title?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShoppingListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShoppingList to aggregate.
     */
    where?: ShoppingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingLists to fetch.
     */
    orderBy?: ShoppingListOrderByWithRelationInput | ShoppingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShoppingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShoppingLists
    **/
    _count?: true | ShoppingListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShoppingListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShoppingListMaxAggregateInputType
  }

  export type GetShoppingListAggregateType<T extends ShoppingListAggregateArgs> = {
        [P in keyof T & keyof AggregateShoppingList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShoppingList[P]>
      : GetScalarType<T[P], AggregateShoppingList[P]>
  }




  export type ShoppingListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShoppingListWhereInput
    orderBy?: ShoppingListOrderByWithAggregationInput | ShoppingListOrderByWithAggregationInput[]
    by: ShoppingListScalarFieldEnum[] | ShoppingListScalarFieldEnum
    having?: ShoppingListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShoppingListCountAggregateInputType | true
    _min?: ShoppingListMinAggregateInputType
    _max?: ShoppingListMaxAggregateInputType
  }

  export type ShoppingListGroupByOutputType = {
    id: string
    title: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: ShoppingListCountAggregateOutputType | null
    _min: ShoppingListMinAggregateOutputType | null
    _max: ShoppingListMaxAggregateOutputType | null
  }

  type GetShoppingListGroupByPayload<T extends ShoppingListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShoppingListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShoppingListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShoppingListGroupByOutputType[P]>
            : GetScalarType<T[P], ShoppingListGroupByOutputType[P]>
        }
      >
    >


  export type ShoppingListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | ShoppingList$itemsArgs<ExtArgs>
    _count?: boolean | ShoppingListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingList"]>

  export type ShoppingListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingList"]>

  export type ShoppingListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingList"]>

  export type ShoppingListSelectScalar = {
    id?: boolean
    title?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShoppingListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["shoppingList"]>
  export type ShoppingListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | ShoppingList$itemsArgs<ExtArgs>
    _count?: boolean | ShoppingListCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShoppingListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ShoppingListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ShoppingListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShoppingList"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$ShoppingListItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shoppingList"]>
    composites: {}
  }

  type ShoppingListGetPayload<S extends boolean | null | undefined | ShoppingListDefaultArgs> = $Result.GetResult<Prisma.$ShoppingListPayload, S>

  type ShoppingListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShoppingListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShoppingListCountAggregateInputType | true
    }

  export interface ShoppingListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShoppingList'], meta: { name: 'ShoppingList' } }
    /**
     * Find zero or one ShoppingList that matches the filter.
     * @param {ShoppingListFindUniqueArgs} args - Arguments to find a ShoppingList
     * @example
     * // Get one ShoppingList
     * const shoppingList = await prisma.shoppingList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShoppingListFindUniqueArgs>(args: SelectSubset<T, ShoppingListFindUniqueArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShoppingList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShoppingListFindUniqueOrThrowArgs} args - Arguments to find a ShoppingList
     * @example
     * // Get one ShoppingList
     * const shoppingList = await prisma.shoppingList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShoppingListFindUniqueOrThrowArgs>(args: SelectSubset<T, ShoppingListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShoppingList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListFindFirstArgs} args - Arguments to find a ShoppingList
     * @example
     * // Get one ShoppingList
     * const shoppingList = await prisma.shoppingList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShoppingListFindFirstArgs>(args?: SelectSubset<T, ShoppingListFindFirstArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShoppingList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListFindFirstOrThrowArgs} args - Arguments to find a ShoppingList
     * @example
     * // Get one ShoppingList
     * const shoppingList = await prisma.shoppingList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShoppingListFindFirstOrThrowArgs>(args?: SelectSubset<T, ShoppingListFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShoppingLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShoppingLists
     * const shoppingLists = await prisma.shoppingList.findMany()
     * 
     * // Get first 10 ShoppingLists
     * const shoppingLists = await prisma.shoppingList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shoppingListWithIdOnly = await prisma.shoppingList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShoppingListFindManyArgs>(args?: SelectSubset<T, ShoppingListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShoppingList.
     * @param {ShoppingListCreateArgs} args - Arguments to create a ShoppingList.
     * @example
     * // Create one ShoppingList
     * const ShoppingList = await prisma.shoppingList.create({
     *   data: {
     *     // ... data to create a ShoppingList
     *   }
     * })
     * 
     */
    create<T extends ShoppingListCreateArgs>(args: SelectSubset<T, ShoppingListCreateArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShoppingLists.
     * @param {ShoppingListCreateManyArgs} args - Arguments to create many ShoppingLists.
     * @example
     * // Create many ShoppingLists
     * const shoppingList = await prisma.shoppingList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShoppingListCreateManyArgs>(args?: SelectSubset<T, ShoppingListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShoppingLists and returns the data saved in the database.
     * @param {ShoppingListCreateManyAndReturnArgs} args - Arguments to create many ShoppingLists.
     * @example
     * // Create many ShoppingLists
     * const shoppingList = await prisma.shoppingList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShoppingLists and only return the `id`
     * const shoppingListWithIdOnly = await prisma.shoppingList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShoppingListCreateManyAndReturnArgs>(args?: SelectSubset<T, ShoppingListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShoppingList.
     * @param {ShoppingListDeleteArgs} args - Arguments to delete one ShoppingList.
     * @example
     * // Delete one ShoppingList
     * const ShoppingList = await prisma.shoppingList.delete({
     *   where: {
     *     // ... filter to delete one ShoppingList
     *   }
     * })
     * 
     */
    delete<T extends ShoppingListDeleteArgs>(args: SelectSubset<T, ShoppingListDeleteArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShoppingList.
     * @param {ShoppingListUpdateArgs} args - Arguments to update one ShoppingList.
     * @example
     * // Update one ShoppingList
     * const shoppingList = await prisma.shoppingList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShoppingListUpdateArgs>(args: SelectSubset<T, ShoppingListUpdateArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShoppingLists.
     * @param {ShoppingListDeleteManyArgs} args - Arguments to filter ShoppingLists to delete.
     * @example
     * // Delete a few ShoppingLists
     * const { count } = await prisma.shoppingList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShoppingListDeleteManyArgs>(args?: SelectSubset<T, ShoppingListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShoppingLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShoppingLists
     * const shoppingList = await prisma.shoppingList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShoppingListUpdateManyArgs>(args: SelectSubset<T, ShoppingListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShoppingLists and returns the data updated in the database.
     * @param {ShoppingListUpdateManyAndReturnArgs} args - Arguments to update many ShoppingLists.
     * @example
     * // Update many ShoppingLists
     * const shoppingList = await prisma.shoppingList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShoppingLists and only return the `id`
     * const shoppingListWithIdOnly = await prisma.shoppingList.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShoppingListUpdateManyAndReturnArgs>(args: SelectSubset<T, ShoppingListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShoppingList.
     * @param {ShoppingListUpsertArgs} args - Arguments to update or create a ShoppingList.
     * @example
     * // Update or create a ShoppingList
     * const shoppingList = await prisma.shoppingList.upsert({
     *   create: {
     *     // ... data to create a ShoppingList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShoppingList we want to update
     *   }
     * })
     */
    upsert<T extends ShoppingListUpsertArgs>(args: SelectSubset<T, ShoppingListUpsertArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShoppingLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListCountArgs} args - Arguments to filter ShoppingLists to count.
     * @example
     * // Count the number of ShoppingLists
     * const count = await prisma.shoppingList.count({
     *   where: {
     *     // ... the filter for the ShoppingLists we want to count
     *   }
     * })
    **/
    count<T extends ShoppingListCountArgs>(
      args?: Subset<T, ShoppingListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShoppingListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShoppingList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShoppingListAggregateArgs>(args: Subset<T, ShoppingListAggregateArgs>): Prisma.PrismaPromise<GetShoppingListAggregateType<T>>

    /**
     * Group by ShoppingList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShoppingListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShoppingListGroupByArgs['orderBy'] }
        : { orderBy?: ShoppingListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShoppingListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShoppingListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShoppingList model
   */
  readonly fields: ShoppingListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShoppingList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShoppingListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends ShoppingList$itemsArgs<ExtArgs> = {}>(args?: Subset<T, ShoppingList$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShoppingList model
   */
  interface ShoppingListFieldRefs {
    readonly id: FieldRef<"ShoppingList", 'String'>
    readonly title: FieldRef<"ShoppingList", 'String'>
    readonly userId: FieldRef<"ShoppingList", 'String'>
    readonly createdAt: FieldRef<"ShoppingList", 'DateTime'>
    readonly updatedAt: FieldRef<"ShoppingList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShoppingList findUnique
   */
  export type ShoppingListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingList to fetch.
     */
    where: ShoppingListWhereUniqueInput
  }

  /**
   * ShoppingList findUniqueOrThrow
   */
  export type ShoppingListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingList to fetch.
     */
    where: ShoppingListWhereUniqueInput
  }

  /**
   * ShoppingList findFirst
   */
  export type ShoppingListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingList to fetch.
     */
    where?: ShoppingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingLists to fetch.
     */
    orderBy?: ShoppingListOrderByWithRelationInput | ShoppingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShoppingLists.
     */
    cursor?: ShoppingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShoppingLists.
     */
    distinct?: ShoppingListScalarFieldEnum | ShoppingListScalarFieldEnum[]
  }

  /**
   * ShoppingList findFirstOrThrow
   */
  export type ShoppingListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingList to fetch.
     */
    where?: ShoppingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingLists to fetch.
     */
    orderBy?: ShoppingListOrderByWithRelationInput | ShoppingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShoppingLists.
     */
    cursor?: ShoppingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShoppingLists.
     */
    distinct?: ShoppingListScalarFieldEnum | ShoppingListScalarFieldEnum[]
  }

  /**
   * ShoppingList findMany
   */
  export type ShoppingListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingLists to fetch.
     */
    where?: ShoppingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingLists to fetch.
     */
    orderBy?: ShoppingListOrderByWithRelationInput | ShoppingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShoppingLists.
     */
    cursor?: ShoppingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingLists.
     */
    skip?: number
    distinct?: ShoppingListScalarFieldEnum | ShoppingListScalarFieldEnum[]
  }

  /**
   * ShoppingList create
   */
  export type ShoppingListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * The data needed to create a ShoppingList.
     */
    data: XOR<ShoppingListCreateInput, ShoppingListUncheckedCreateInput>
  }

  /**
   * ShoppingList createMany
   */
  export type ShoppingListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShoppingLists.
     */
    data: ShoppingListCreateManyInput | ShoppingListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShoppingList createManyAndReturn
   */
  export type ShoppingListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * The data used to create many ShoppingLists.
     */
    data: ShoppingListCreateManyInput | ShoppingListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShoppingList update
   */
  export type ShoppingListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * The data needed to update a ShoppingList.
     */
    data: XOR<ShoppingListUpdateInput, ShoppingListUncheckedUpdateInput>
    /**
     * Choose, which ShoppingList to update.
     */
    where: ShoppingListWhereUniqueInput
  }

  /**
   * ShoppingList updateMany
   */
  export type ShoppingListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShoppingLists.
     */
    data: XOR<ShoppingListUpdateManyMutationInput, ShoppingListUncheckedUpdateManyInput>
    /**
     * Filter which ShoppingLists to update
     */
    where?: ShoppingListWhereInput
    /**
     * Limit how many ShoppingLists to update.
     */
    limit?: number
  }

  /**
   * ShoppingList updateManyAndReturn
   */
  export type ShoppingListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * The data used to update ShoppingLists.
     */
    data: XOR<ShoppingListUpdateManyMutationInput, ShoppingListUncheckedUpdateManyInput>
    /**
     * Filter which ShoppingLists to update
     */
    where?: ShoppingListWhereInput
    /**
     * Limit how many ShoppingLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShoppingList upsert
   */
  export type ShoppingListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * The filter to search for the ShoppingList to update in case it exists.
     */
    where: ShoppingListWhereUniqueInput
    /**
     * In case the ShoppingList found by the `where` argument doesn't exist, create a new ShoppingList with this data.
     */
    create: XOR<ShoppingListCreateInput, ShoppingListUncheckedCreateInput>
    /**
     * In case the ShoppingList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShoppingListUpdateInput, ShoppingListUncheckedUpdateInput>
  }

  /**
   * ShoppingList delete
   */
  export type ShoppingListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * Filter which ShoppingList to delete.
     */
    where: ShoppingListWhereUniqueInput
  }

  /**
   * ShoppingList deleteMany
   */
  export type ShoppingListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShoppingLists to delete
     */
    where?: ShoppingListWhereInput
    /**
     * Limit how many ShoppingLists to delete.
     */
    limit?: number
  }

  /**
   * ShoppingList.items
   */
  export type ShoppingList$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemInclude<ExtArgs> | null
    where?: ShoppingListItemWhereInput
    orderBy?: ShoppingListItemOrderByWithRelationInput | ShoppingListItemOrderByWithRelationInput[]
    cursor?: ShoppingListItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShoppingListItemScalarFieldEnum | ShoppingListItemScalarFieldEnum[]
  }

  /**
   * ShoppingList without action
   */
  export type ShoppingListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
  }


  /**
   * Model ShoppingListItem
   */

  export type AggregateShoppingListItem = {
    _count: ShoppingListItemCountAggregateOutputType | null
    _avg: ShoppingListItemAvgAggregateOutputType | null
    _sum: ShoppingListItemSumAggregateOutputType | null
    _min: ShoppingListItemMinAggregateOutputType | null
    _max: ShoppingListItemMaxAggregateOutputType | null
  }

  export type ShoppingListItemAvgAggregateOutputType = {
    quantity: number | null
  }

  export type ShoppingListItemSumAggregateOutputType = {
    quantity: number | null
  }

  export type ShoppingListItemMinAggregateOutputType = {
    id: string | null
    shoppingListId: string | null
    flyerItemId: string | null
    name: string | null
    quantity: number | null
    isChecked: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShoppingListItemMaxAggregateOutputType = {
    id: string | null
    shoppingListId: string | null
    flyerItemId: string | null
    name: string | null
    quantity: number | null
    isChecked: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShoppingListItemCountAggregateOutputType = {
    id: number
    shoppingListId: number
    flyerItemId: number
    name: number
    quantity: number
    isChecked: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShoppingListItemAvgAggregateInputType = {
    quantity?: true
  }

  export type ShoppingListItemSumAggregateInputType = {
    quantity?: true
  }

  export type ShoppingListItemMinAggregateInputType = {
    id?: true
    shoppingListId?: true
    flyerItemId?: true
    name?: true
    quantity?: true
    isChecked?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShoppingListItemMaxAggregateInputType = {
    id?: true
    shoppingListId?: true
    flyerItemId?: true
    name?: true
    quantity?: true
    isChecked?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShoppingListItemCountAggregateInputType = {
    id?: true
    shoppingListId?: true
    flyerItemId?: true
    name?: true
    quantity?: true
    isChecked?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShoppingListItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShoppingListItem to aggregate.
     */
    where?: ShoppingListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingListItems to fetch.
     */
    orderBy?: ShoppingListItemOrderByWithRelationInput | ShoppingListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShoppingListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingListItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShoppingListItems
    **/
    _count?: true | ShoppingListItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShoppingListItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShoppingListItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShoppingListItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShoppingListItemMaxAggregateInputType
  }

  export type GetShoppingListItemAggregateType<T extends ShoppingListItemAggregateArgs> = {
        [P in keyof T & keyof AggregateShoppingListItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShoppingListItem[P]>
      : GetScalarType<T[P], AggregateShoppingListItem[P]>
  }




  export type ShoppingListItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShoppingListItemWhereInput
    orderBy?: ShoppingListItemOrderByWithAggregationInput | ShoppingListItemOrderByWithAggregationInput[]
    by: ShoppingListItemScalarFieldEnum[] | ShoppingListItemScalarFieldEnum
    having?: ShoppingListItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShoppingListItemCountAggregateInputType | true
    _avg?: ShoppingListItemAvgAggregateInputType
    _sum?: ShoppingListItemSumAggregateInputType
    _min?: ShoppingListItemMinAggregateInputType
    _max?: ShoppingListItemMaxAggregateInputType
  }

  export type ShoppingListItemGroupByOutputType = {
    id: string
    shoppingListId: string
    flyerItemId: string | null
    name: string
    quantity: number
    isChecked: boolean
    createdAt: Date
    updatedAt: Date
    _count: ShoppingListItemCountAggregateOutputType | null
    _avg: ShoppingListItemAvgAggregateOutputType | null
    _sum: ShoppingListItemSumAggregateOutputType | null
    _min: ShoppingListItemMinAggregateOutputType | null
    _max: ShoppingListItemMaxAggregateOutputType | null
  }

  type GetShoppingListItemGroupByPayload<T extends ShoppingListItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShoppingListItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShoppingListItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShoppingListItemGroupByOutputType[P]>
            : GetScalarType<T[P], ShoppingListItemGroupByOutputType[P]>
        }
      >
    >


  export type ShoppingListItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shoppingListId?: boolean
    flyerItemId?: boolean
    name?: boolean
    quantity?: boolean
    isChecked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shoppingList?: boolean | ShoppingListDefaultArgs<ExtArgs>
    flyerItem?: boolean | ShoppingListItem$flyerItemArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingListItem"]>

  export type ShoppingListItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shoppingListId?: boolean
    flyerItemId?: boolean
    name?: boolean
    quantity?: boolean
    isChecked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shoppingList?: boolean | ShoppingListDefaultArgs<ExtArgs>
    flyerItem?: boolean | ShoppingListItem$flyerItemArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingListItem"]>

  export type ShoppingListItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shoppingListId?: boolean
    flyerItemId?: boolean
    name?: boolean
    quantity?: boolean
    isChecked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shoppingList?: boolean | ShoppingListDefaultArgs<ExtArgs>
    flyerItem?: boolean | ShoppingListItem$flyerItemArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingListItem"]>

  export type ShoppingListItemSelectScalar = {
    id?: boolean
    shoppingListId?: boolean
    flyerItemId?: boolean
    name?: boolean
    quantity?: boolean
    isChecked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShoppingListItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shoppingListId" | "flyerItemId" | "name" | "quantity" | "isChecked" | "createdAt" | "updatedAt", ExtArgs["result"]["shoppingListItem"]>
  export type ShoppingListItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shoppingList?: boolean | ShoppingListDefaultArgs<ExtArgs>
    flyerItem?: boolean | ShoppingListItem$flyerItemArgs<ExtArgs>
  }
  export type ShoppingListItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shoppingList?: boolean | ShoppingListDefaultArgs<ExtArgs>
    flyerItem?: boolean | ShoppingListItem$flyerItemArgs<ExtArgs>
  }
  export type ShoppingListItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shoppingList?: boolean | ShoppingListDefaultArgs<ExtArgs>
    flyerItem?: boolean | ShoppingListItem$flyerItemArgs<ExtArgs>
  }

  export type $ShoppingListItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShoppingListItem"
    objects: {
      shoppingList: Prisma.$ShoppingListPayload<ExtArgs>
      flyerItem: Prisma.$FlyerItemPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shoppingListId: string
      flyerItemId: string | null
      name: string
      quantity: number
      isChecked: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shoppingListItem"]>
    composites: {}
  }

  type ShoppingListItemGetPayload<S extends boolean | null | undefined | ShoppingListItemDefaultArgs> = $Result.GetResult<Prisma.$ShoppingListItemPayload, S>

  type ShoppingListItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShoppingListItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShoppingListItemCountAggregateInputType | true
    }

  export interface ShoppingListItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShoppingListItem'], meta: { name: 'ShoppingListItem' } }
    /**
     * Find zero or one ShoppingListItem that matches the filter.
     * @param {ShoppingListItemFindUniqueArgs} args - Arguments to find a ShoppingListItem
     * @example
     * // Get one ShoppingListItem
     * const shoppingListItem = await prisma.shoppingListItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShoppingListItemFindUniqueArgs>(args: SelectSubset<T, ShoppingListItemFindUniqueArgs<ExtArgs>>): Prisma__ShoppingListItemClient<$Result.GetResult<Prisma.$ShoppingListItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShoppingListItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShoppingListItemFindUniqueOrThrowArgs} args - Arguments to find a ShoppingListItem
     * @example
     * // Get one ShoppingListItem
     * const shoppingListItem = await prisma.shoppingListItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShoppingListItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ShoppingListItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShoppingListItemClient<$Result.GetResult<Prisma.$ShoppingListItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShoppingListItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListItemFindFirstArgs} args - Arguments to find a ShoppingListItem
     * @example
     * // Get one ShoppingListItem
     * const shoppingListItem = await prisma.shoppingListItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShoppingListItemFindFirstArgs>(args?: SelectSubset<T, ShoppingListItemFindFirstArgs<ExtArgs>>): Prisma__ShoppingListItemClient<$Result.GetResult<Prisma.$ShoppingListItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShoppingListItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListItemFindFirstOrThrowArgs} args - Arguments to find a ShoppingListItem
     * @example
     * // Get one ShoppingListItem
     * const shoppingListItem = await prisma.shoppingListItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShoppingListItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ShoppingListItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShoppingListItemClient<$Result.GetResult<Prisma.$ShoppingListItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShoppingListItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShoppingListItems
     * const shoppingListItems = await prisma.shoppingListItem.findMany()
     * 
     * // Get first 10 ShoppingListItems
     * const shoppingListItems = await prisma.shoppingListItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shoppingListItemWithIdOnly = await prisma.shoppingListItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShoppingListItemFindManyArgs>(args?: SelectSubset<T, ShoppingListItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShoppingListItem.
     * @param {ShoppingListItemCreateArgs} args - Arguments to create a ShoppingListItem.
     * @example
     * // Create one ShoppingListItem
     * const ShoppingListItem = await prisma.shoppingListItem.create({
     *   data: {
     *     // ... data to create a ShoppingListItem
     *   }
     * })
     * 
     */
    create<T extends ShoppingListItemCreateArgs>(args: SelectSubset<T, ShoppingListItemCreateArgs<ExtArgs>>): Prisma__ShoppingListItemClient<$Result.GetResult<Prisma.$ShoppingListItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShoppingListItems.
     * @param {ShoppingListItemCreateManyArgs} args - Arguments to create many ShoppingListItems.
     * @example
     * // Create many ShoppingListItems
     * const shoppingListItem = await prisma.shoppingListItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShoppingListItemCreateManyArgs>(args?: SelectSubset<T, ShoppingListItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShoppingListItems and returns the data saved in the database.
     * @param {ShoppingListItemCreateManyAndReturnArgs} args - Arguments to create many ShoppingListItems.
     * @example
     * // Create many ShoppingListItems
     * const shoppingListItem = await prisma.shoppingListItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShoppingListItems and only return the `id`
     * const shoppingListItemWithIdOnly = await prisma.shoppingListItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShoppingListItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ShoppingListItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShoppingListItem.
     * @param {ShoppingListItemDeleteArgs} args - Arguments to delete one ShoppingListItem.
     * @example
     * // Delete one ShoppingListItem
     * const ShoppingListItem = await prisma.shoppingListItem.delete({
     *   where: {
     *     // ... filter to delete one ShoppingListItem
     *   }
     * })
     * 
     */
    delete<T extends ShoppingListItemDeleteArgs>(args: SelectSubset<T, ShoppingListItemDeleteArgs<ExtArgs>>): Prisma__ShoppingListItemClient<$Result.GetResult<Prisma.$ShoppingListItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShoppingListItem.
     * @param {ShoppingListItemUpdateArgs} args - Arguments to update one ShoppingListItem.
     * @example
     * // Update one ShoppingListItem
     * const shoppingListItem = await prisma.shoppingListItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShoppingListItemUpdateArgs>(args: SelectSubset<T, ShoppingListItemUpdateArgs<ExtArgs>>): Prisma__ShoppingListItemClient<$Result.GetResult<Prisma.$ShoppingListItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShoppingListItems.
     * @param {ShoppingListItemDeleteManyArgs} args - Arguments to filter ShoppingListItems to delete.
     * @example
     * // Delete a few ShoppingListItems
     * const { count } = await prisma.shoppingListItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShoppingListItemDeleteManyArgs>(args?: SelectSubset<T, ShoppingListItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShoppingListItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShoppingListItems
     * const shoppingListItem = await prisma.shoppingListItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShoppingListItemUpdateManyArgs>(args: SelectSubset<T, ShoppingListItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShoppingListItems and returns the data updated in the database.
     * @param {ShoppingListItemUpdateManyAndReturnArgs} args - Arguments to update many ShoppingListItems.
     * @example
     * // Update many ShoppingListItems
     * const shoppingListItem = await prisma.shoppingListItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShoppingListItems and only return the `id`
     * const shoppingListItemWithIdOnly = await prisma.shoppingListItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShoppingListItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ShoppingListItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShoppingListItem.
     * @param {ShoppingListItemUpsertArgs} args - Arguments to update or create a ShoppingListItem.
     * @example
     * // Update or create a ShoppingListItem
     * const shoppingListItem = await prisma.shoppingListItem.upsert({
     *   create: {
     *     // ... data to create a ShoppingListItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShoppingListItem we want to update
     *   }
     * })
     */
    upsert<T extends ShoppingListItemUpsertArgs>(args: SelectSubset<T, ShoppingListItemUpsertArgs<ExtArgs>>): Prisma__ShoppingListItemClient<$Result.GetResult<Prisma.$ShoppingListItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShoppingListItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListItemCountArgs} args - Arguments to filter ShoppingListItems to count.
     * @example
     * // Count the number of ShoppingListItems
     * const count = await prisma.shoppingListItem.count({
     *   where: {
     *     // ... the filter for the ShoppingListItems we want to count
     *   }
     * })
    **/
    count<T extends ShoppingListItemCountArgs>(
      args?: Subset<T, ShoppingListItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShoppingListItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShoppingListItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShoppingListItemAggregateArgs>(args: Subset<T, ShoppingListItemAggregateArgs>): Prisma.PrismaPromise<GetShoppingListItemAggregateType<T>>

    /**
     * Group by ShoppingListItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShoppingListItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShoppingListItemGroupByArgs['orderBy'] }
        : { orderBy?: ShoppingListItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShoppingListItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShoppingListItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShoppingListItem model
   */
  readonly fields: ShoppingListItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShoppingListItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShoppingListItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shoppingList<T extends ShoppingListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShoppingListDefaultArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    flyerItem<T extends ShoppingListItem$flyerItemArgs<ExtArgs> = {}>(args?: Subset<T, ShoppingListItem$flyerItemArgs<ExtArgs>>): Prisma__FlyerItemClient<$Result.GetResult<Prisma.$FlyerItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShoppingListItem model
   */
  interface ShoppingListItemFieldRefs {
    readonly id: FieldRef<"ShoppingListItem", 'String'>
    readonly shoppingListId: FieldRef<"ShoppingListItem", 'String'>
    readonly flyerItemId: FieldRef<"ShoppingListItem", 'String'>
    readonly name: FieldRef<"ShoppingListItem", 'String'>
    readonly quantity: FieldRef<"ShoppingListItem", 'Int'>
    readonly isChecked: FieldRef<"ShoppingListItem", 'Boolean'>
    readonly createdAt: FieldRef<"ShoppingListItem", 'DateTime'>
    readonly updatedAt: FieldRef<"ShoppingListItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShoppingListItem findUnique
   */
  export type ShoppingListItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingListItem to fetch.
     */
    where: ShoppingListItemWhereUniqueInput
  }

  /**
   * ShoppingListItem findUniqueOrThrow
   */
  export type ShoppingListItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingListItem to fetch.
     */
    where: ShoppingListItemWhereUniqueInput
  }

  /**
   * ShoppingListItem findFirst
   */
  export type ShoppingListItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingListItem to fetch.
     */
    where?: ShoppingListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingListItems to fetch.
     */
    orderBy?: ShoppingListItemOrderByWithRelationInput | ShoppingListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShoppingListItems.
     */
    cursor?: ShoppingListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingListItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShoppingListItems.
     */
    distinct?: ShoppingListItemScalarFieldEnum | ShoppingListItemScalarFieldEnum[]
  }

  /**
   * ShoppingListItem findFirstOrThrow
   */
  export type ShoppingListItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingListItem to fetch.
     */
    where?: ShoppingListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingListItems to fetch.
     */
    orderBy?: ShoppingListItemOrderByWithRelationInput | ShoppingListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShoppingListItems.
     */
    cursor?: ShoppingListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingListItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShoppingListItems.
     */
    distinct?: ShoppingListItemScalarFieldEnum | ShoppingListItemScalarFieldEnum[]
  }

  /**
   * ShoppingListItem findMany
   */
  export type ShoppingListItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingListItems to fetch.
     */
    where?: ShoppingListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingListItems to fetch.
     */
    orderBy?: ShoppingListItemOrderByWithRelationInput | ShoppingListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShoppingListItems.
     */
    cursor?: ShoppingListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingListItems.
     */
    skip?: number
    distinct?: ShoppingListItemScalarFieldEnum | ShoppingListItemScalarFieldEnum[]
  }

  /**
   * ShoppingListItem create
   */
  export type ShoppingListItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ShoppingListItem.
     */
    data: XOR<ShoppingListItemCreateInput, ShoppingListItemUncheckedCreateInput>
  }

  /**
   * ShoppingListItem createMany
   */
  export type ShoppingListItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShoppingListItems.
     */
    data: ShoppingListItemCreateManyInput | ShoppingListItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShoppingListItem createManyAndReturn
   */
  export type ShoppingListItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null
    /**
     * The data used to create many ShoppingListItems.
     */
    data: ShoppingListItemCreateManyInput | ShoppingListItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShoppingListItem update
   */
  export type ShoppingListItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ShoppingListItem.
     */
    data: XOR<ShoppingListItemUpdateInput, ShoppingListItemUncheckedUpdateInput>
    /**
     * Choose, which ShoppingListItem to update.
     */
    where: ShoppingListItemWhereUniqueInput
  }

  /**
   * ShoppingListItem updateMany
   */
  export type ShoppingListItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShoppingListItems.
     */
    data: XOR<ShoppingListItemUpdateManyMutationInput, ShoppingListItemUncheckedUpdateManyInput>
    /**
     * Filter which ShoppingListItems to update
     */
    where?: ShoppingListItemWhereInput
    /**
     * Limit how many ShoppingListItems to update.
     */
    limit?: number
  }

  /**
   * ShoppingListItem updateManyAndReturn
   */
  export type ShoppingListItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null
    /**
     * The data used to update ShoppingListItems.
     */
    data: XOR<ShoppingListItemUpdateManyMutationInput, ShoppingListItemUncheckedUpdateManyInput>
    /**
     * Filter which ShoppingListItems to update
     */
    where?: ShoppingListItemWhereInput
    /**
     * Limit how many ShoppingListItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShoppingListItem upsert
   */
  export type ShoppingListItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ShoppingListItem to update in case it exists.
     */
    where: ShoppingListItemWhereUniqueInput
    /**
     * In case the ShoppingListItem found by the `where` argument doesn't exist, create a new ShoppingListItem with this data.
     */
    create: XOR<ShoppingListItemCreateInput, ShoppingListItemUncheckedCreateInput>
    /**
     * In case the ShoppingListItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShoppingListItemUpdateInput, ShoppingListItemUncheckedUpdateInput>
  }

  /**
   * ShoppingListItem delete
   */
  export type ShoppingListItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemInclude<ExtArgs> | null
    /**
     * Filter which ShoppingListItem to delete.
     */
    where: ShoppingListItemWhereUniqueInput
  }

  /**
   * ShoppingListItem deleteMany
   */
  export type ShoppingListItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShoppingListItems to delete
     */
    where?: ShoppingListItemWhereInput
    /**
     * Limit how many ShoppingListItems to delete.
     */
    limit?: number
  }

  /**
   * ShoppingListItem.flyerItem
   */
  export type ShoppingListItem$flyerItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlyerItem
     */
    select?: FlyerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlyerItem
     */
    omit?: FlyerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlyerItemInclude<ExtArgs> | null
    where?: FlyerItemWhereInput
  }

  /**
   * ShoppingListItem without action
   */
  export type ShoppingListItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItem
     */
    select?: ShoppingListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItem
     */
    omit?: ShoppingListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemInclude<ExtArgs> | null
  }


  /**
   * Model WishlistItem
   */

  export type AggregateWishlistItem = {
    _count: WishlistItemCountAggregateOutputType | null
    _avg: WishlistItemAvgAggregateOutputType | null
    _sum: WishlistItemSumAggregateOutputType | null
    _min: WishlistItemMinAggregateOutputType | null
    _max: WishlistItemMaxAggregateOutputType | null
  }

  export type WishlistItemAvgAggregateOutputType = {
    targetPrice: number | null
  }

  export type WishlistItemSumAggregateOutputType = {
    targetPrice: number | null
  }

  export type WishlistItemMinAggregateOutputType = {
    id: string | null
    userId: string | null
    flyerItemId: string | null
    name: string | null
    targetPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WishlistItemMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    flyerItemId: string | null
    name: string | null
    targetPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WishlistItemCountAggregateOutputType = {
    id: number
    userId: number
    flyerItemId: number
    name: number
    targetPrice: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WishlistItemAvgAggregateInputType = {
    targetPrice?: true
  }

  export type WishlistItemSumAggregateInputType = {
    targetPrice?: true
  }

  export type WishlistItemMinAggregateInputType = {
    id?: true
    userId?: true
    flyerItemId?: true
    name?: true
    targetPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WishlistItemMaxAggregateInputType = {
    id?: true
    userId?: true
    flyerItemId?: true
    name?: true
    targetPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WishlistItemCountAggregateInputType = {
    id?: true
    userId?: true
    flyerItemId?: true
    name?: true
    targetPrice?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WishlistItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WishlistItem to aggregate.
     */
    where?: WishlistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WishlistItems to fetch.
     */
    orderBy?: WishlistItemOrderByWithRelationInput | WishlistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WishlistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WishlistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WishlistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WishlistItems
    **/
    _count?: true | WishlistItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WishlistItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WishlistItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WishlistItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WishlistItemMaxAggregateInputType
  }

  export type GetWishlistItemAggregateType<T extends WishlistItemAggregateArgs> = {
        [P in keyof T & keyof AggregateWishlistItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWishlistItem[P]>
      : GetScalarType<T[P], AggregateWishlistItem[P]>
  }




  export type WishlistItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WishlistItemWhereInput
    orderBy?: WishlistItemOrderByWithAggregationInput | WishlistItemOrderByWithAggregationInput[]
    by: WishlistItemScalarFieldEnum[] | WishlistItemScalarFieldEnum
    having?: WishlistItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WishlistItemCountAggregateInputType | true
    _avg?: WishlistItemAvgAggregateInputType
    _sum?: WishlistItemSumAggregateInputType
    _min?: WishlistItemMinAggregateInputType
    _max?: WishlistItemMaxAggregateInputType
  }

  export type WishlistItemGroupByOutputType = {
    id: string
    userId: string
    flyerItemId: string | null
    name: string
    targetPrice: number | null
    createdAt: Date
    updatedAt: Date
    _count: WishlistItemCountAggregateOutputType | null
    _avg: WishlistItemAvgAggregateOutputType | null
    _sum: WishlistItemSumAggregateOutputType | null
    _min: WishlistItemMinAggregateOutputType | null
    _max: WishlistItemMaxAggregateOutputType | null
  }

  type GetWishlistItemGroupByPayload<T extends WishlistItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WishlistItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WishlistItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WishlistItemGroupByOutputType[P]>
            : GetScalarType<T[P], WishlistItemGroupByOutputType[P]>
        }
      >
    >


  export type WishlistItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    flyerItemId?: boolean
    name?: boolean
    targetPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    flyerItem?: boolean | WishlistItem$flyerItemArgs<ExtArgs>
  }, ExtArgs["result"]["wishlistItem"]>

  export type WishlistItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    flyerItemId?: boolean
    name?: boolean
    targetPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    flyerItem?: boolean | WishlistItem$flyerItemArgs<ExtArgs>
  }, ExtArgs["result"]["wishlistItem"]>

  export type WishlistItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    flyerItemId?: boolean
    name?: boolean
    targetPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    flyerItem?: boolean | WishlistItem$flyerItemArgs<ExtArgs>
  }, ExtArgs["result"]["wishlistItem"]>

  export type WishlistItemSelectScalar = {
    id?: boolean
    userId?: boolean
    flyerItemId?: boolean
    name?: boolean
    targetPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WishlistItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "flyerItemId" | "name" | "targetPrice" | "createdAt" | "updatedAt", ExtArgs["result"]["wishlistItem"]>
  export type WishlistItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    flyerItem?: boolean | WishlistItem$flyerItemArgs<ExtArgs>
  }
  export type WishlistItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    flyerItem?: boolean | WishlistItem$flyerItemArgs<ExtArgs>
  }
  export type WishlistItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    flyerItem?: boolean | WishlistItem$flyerItemArgs<ExtArgs>
  }

  export type $WishlistItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WishlistItem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      flyerItem: Prisma.$FlyerItemPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      flyerItemId: string | null
      name: string
      targetPrice: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["wishlistItem"]>
    composites: {}
  }

  type WishlistItemGetPayload<S extends boolean | null | undefined | WishlistItemDefaultArgs> = $Result.GetResult<Prisma.$WishlistItemPayload, S>

  type WishlistItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WishlistItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WishlistItemCountAggregateInputType | true
    }

  export interface WishlistItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WishlistItem'], meta: { name: 'WishlistItem' } }
    /**
     * Find zero or one WishlistItem that matches the filter.
     * @param {WishlistItemFindUniqueArgs} args - Arguments to find a WishlistItem
     * @example
     * // Get one WishlistItem
     * const wishlistItem = await prisma.wishlistItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WishlistItemFindUniqueArgs>(args: SelectSubset<T, WishlistItemFindUniqueArgs<ExtArgs>>): Prisma__WishlistItemClient<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WishlistItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WishlistItemFindUniqueOrThrowArgs} args - Arguments to find a WishlistItem
     * @example
     * // Get one WishlistItem
     * const wishlistItem = await prisma.wishlistItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WishlistItemFindUniqueOrThrowArgs>(args: SelectSubset<T, WishlistItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WishlistItemClient<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WishlistItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistItemFindFirstArgs} args - Arguments to find a WishlistItem
     * @example
     * // Get one WishlistItem
     * const wishlistItem = await prisma.wishlistItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WishlistItemFindFirstArgs>(args?: SelectSubset<T, WishlistItemFindFirstArgs<ExtArgs>>): Prisma__WishlistItemClient<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WishlistItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistItemFindFirstOrThrowArgs} args - Arguments to find a WishlistItem
     * @example
     * // Get one WishlistItem
     * const wishlistItem = await prisma.wishlistItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WishlistItemFindFirstOrThrowArgs>(args?: SelectSubset<T, WishlistItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__WishlistItemClient<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WishlistItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WishlistItems
     * const wishlistItems = await prisma.wishlistItem.findMany()
     * 
     * // Get first 10 WishlistItems
     * const wishlistItems = await prisma.wishlistItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wishlistItemWithIdOnly = await prisma.wishlistItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WishlistItemFindManyArgs>(args?: SelectSubset<T, WishlistItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WishlistItem.
     * @param {WishlistItemCreateArgs} args - Arguments to create a WishlistItem.
     * @example
     * // Create one WishlistItem
     * const WishlistItem = await prisma.wishlistItem.create({
     *   data: {
     *     // ... data to create a WishlistItem
     *   }
     * })
     * 
     */
    create<T extends WishlistItemCreateArgs>(args: SelectSubset<T, WishlistItemCreateArgs<ExtArgs>>): Prisma__WishlistItemClient<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WishlistItems.
     * @param {WishlistItemCreateManyArgs} args - Arguments to create many WishlistItems.
     * @example
     * // Create many WishlistItems
     * const wishlistItem = await prisma.wishlistItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WishlistItemCreateManyArgs>(args?: SelectSubset<T, WishlistItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WishlistItems and returns the data saved in the database.
     * @param {WishlistItemCreateManyAndReturnArgs} args - Arguments to create many WishlistItems.
     * @example
     * // Create many WishlistItems
     * const wishlistItem = await prisma.wishlistItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WishlistItems and only return the `id`
     * const wishlistItemWithIdOnly = await prisma.wishlistItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WishlistItemCreateManyAndReturnArgs>(args?: SelectSubset<T, WishlistItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WishlistItem.
     * @param {WishlistItemDeleteArgs} args - Arguments to delete one WishlistItem.
     * @example
     * // Delete one WishlistItem
     * const WishlistItem = await prisma.wishlistItem.delete({
     *   where: {
     *     // ... filter to delete one WishlistItem
     *   }
     * })
     * 
     */
    delete<T extends WishlistItemDeleteArgs>(args: SelectSubset<T, WishlistItemDeleteArgs<ExtArgs>>): Prisma__WishlistItemClient<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WishlistItem.
     * @param {WishlistItemUpdateArgs} args - Arguments to update one WishlistItem.
     * @example
     * // Update one WishlistItem
     * const wishlistItem = await prisma.wishlistItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WishlistItemUpdateArgs>(args: SelectSubset<T, WishlistItemUpdateArgs<ExtArgs>>): Prisma__WishlistItemClient<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WishlistItems.
     * @param {WishlistItemDeleteManyArgs} args - Arguments to filter WishlistItems to delete.
     * @example
     * // Delete a few WishlistItems
     * const { count } = await prisma.wishlistItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WishlistItemDeleteManyArgs>(args?: SelectSubset<T, WishlistItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WishlistItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WishlistItems
     * const wishlistItem = await prisma.wishlistItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WishlistItemUpdateManyArgs>(args: SelectSubset<T, WishlistItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WishlistItems and returns the data updated in the database.
     * @param {WishlistItemUpdateManyAndReturnArgs} args - Arguments to update many WishlistItems.
     * @example
     * // Update many WishlistItems
     * const wishlistItem = await prisma.wishlistItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WishlistItems and only return the `id`
     * const wishlistItemWithIdOnly = await prisma.wishlistItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WishlistItemUpdateManyAndReturnArgs>(args: SelectSubset<T, WishlistItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WishlistItem.
     * @param {WishlistItemUpsertArgs} args - Arguments to update or create a WishlistItem.
     * @example
     * // Update or create a WishlistItem
     * const wishlistItem = await prisma.wishlistItem.upsert({
     *   create: {
     *     // ... data to create a WishlistItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WishlistItem we want to update
     *   }
     * })
     */
    upsert<T extends WishlistItemUpsertArgs>(args: SelectSubset<T, WishlistItemUpsertArgs<ExtArgs>>): Prisma__WishlistItemClient<$Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WishlistItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistItemCountArgs} args - Arguments to filter WishlistItems to count.
     * @example
     * // Count the number of WishlistItems
     * const count = await prisma.wishlistItem.count({
     *   where: {
     *     // ... the filter for the WishlistItems we want to count
     *   }
     * })
    **/
    count<T extends WishlistItemCountArgs>(
      args?: Subset<T, WishlistItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WishlistItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WishlistItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WishlistItemAggregateArgs>(args: Subset<T, WishlistItemAggregateArgs>): Prisma.PrismaPromise<GetWishlistItemAggregateType<T>>

    /**
     * Group by WishlistItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WishlistItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WishlistItemGroupByArgs['orderBy'] }
        : { orderBy?: WishlistItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WishlistItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWishlistItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WishlistItem model
   */
  readonly fields: WishlistItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WishlistItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WishlistItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    flyerItem<T extends WishlistItem$flyerItemArgs<ExtArgs> = {}>(args?: Subset<T, WishlistItem$flyerItemArgs<ExtArgs>>): Prisma__FlyerItemClient<$Result.GetResult<Prisma.$FlyerItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WishlistItem model
   */
  interface WishlistItemFieldRefs {
    readonly id: FieldRef<"WishlistItem", 'String'>
    readonly userId: FieldRef<"WishlistItem", 'String'>
    readonly flyerItemId: FieldRef<"WishlistItem", 'String'>
    readonly name: FieldRef<"WishlistItem", 'String'>
    readonly targetPrice: FieldRef<"WishlistItem", 'Float'>
    readonly createdAt: FieldRef<"WishlistItem", 'DateTime'>
    readonly updatedAt: FieldRef<"WishlistItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WishlistItem findUnique
   */
  export type WishlistItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WishlistItem to fetch.
     */
    where: WishlistItemWhereUniqueInput
  }

  /**
   * WishlistItem findUniqueOrThrow
   */
  export type WishlistItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WishlistItem to fetch.
     */
    where: WishlistItemWhereUniqueInput
  }

  /**
   * WishlistItem findFirst
   */
  export type WishlistItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WishlistItem to fetch.
     */
    where?: WishlistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WishlistItems to fetch.
     */
    orderBy?: WishlistItemOrderByWithRelationInput | WishlistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WishlistItems.
     */
    cursor?: WishlistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WishlistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WishlistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WishlistItems.
     */
    distinct?: WishlistItemScalarFieldEnum | WishlistItemScalarFieldEnum[]
  }

  /**
   * WishlistItem findFirstOrThrow
   */
  export type WishlistItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WishlistItem to fetch.
     */
    where?: WishlistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WishlistItems to fetch.
     */
    orderBy?: WishlistItemOrderByWithRelationInput | WishlistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WishlistItems.
     */
    cursor?: WishlistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WishlistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WishlistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WishlistItems.
     */
    distinct?: WishlistItemScalarFieldEnum | WishlistItemScalarFieldEnum[]
  }

  /**
   * WishlistItem findMany
   */
  export type WishlistItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WishlistItems to fetch.
     */
    where?: WishlistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WishlistItems to fetch.
     */
    orderBy?: WishlistItemOrderByWithRelationInput | WishlistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WishlistItems.
     */
    cursor?: WishlistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WishlistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WishlistItems.
     */
    skip?: number
    distinct?: WishlistItemScalarFieldEnum | WishlistItemScalarFieldEnum[]
  }

  /**
   * WishlistItem create
   */
  export type WishlistItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
    /**
     * The data needed to create a WishlistItem.
     */
    data: XOR<WishlistItemCreateInput, WishlistItemUncheckedCreateInput>
  }

  /**
   * WishlistItem createMany
   */
  export type WishlistItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WishlistItems.
     */
    data: WishlistItemCreateManyInput | WishlistItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WishlistItem createManyAndReturn
   */
  export type WishlistItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * The data used to create many WishlistItems.
     */
    data: WishlistItemCreateManyInput | WishlistItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WishlistItem update
   */
  export type WishlistItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
    /**
     * The data needed to update a WishlistItem.
     */
    data: XOR<WishlistItemUpdateInput, WishlistItemUncheckedUpdateInput>
    /**
     * Choose, which WishlistItem to update.
     */
    where: WishlistItemWhereUniqueInput
  }

  /**
   * WishlistItem updateMany
   */
  export type WishlistItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WishlistItems.
     */
    data: XOR<WishlistItemUpdateManyMutationInput, WishlistItemUncheckedUpdateManyInput>
    /**
     * Filter which WishlistItems to update
     */
    where?: WishlistItemWhereInput
    /**
     * Limit how many WishlistItems to update.
     */
    limit?: number
  }

  /**
   * WishlistItem updateManyAndReturn
   */
  export type WishlistItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * The data used to update WishlistItems.
     */
    data: XOR<WishlistItemUpdateManyMutationInput, WishlistItemUncheckedUpdateManyInput>
    /**
     * Filter which WishlistItems to update
     */
    where?: WishlistItemWhereInput
    /**
     * Limit how many WishlistItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WishlistItem upsert
   */
  export type WishlistItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
    /**
     * The filter to search for the WishlistItem to update in case it exists.
     */
    where: WishlistItemWhereUniqueInput
    /**
     * In case the WishlistItem found by the `where` argument doesn't exist, create a new WishlistItem with this data.
     */
    create: XOR<WishlistItemCreateInput, WishlistItemUncheckedCreateInput>
    /**
     * In case the WishlistItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WishlistItemUpdateInput, WishlistItemUncheckedUpdateInput>
  }

  /**
   * WishlistItem delete
   */
  export type WishlistItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
    /**
     * Filter which WishlistItem to delete.
     */
    where: WishlistItemWhereUniqueInput
  }

  /**
   * WishlistItem deleteMany
   */
  export type WishlistItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WishlistItems to delete
     */
    where?: WishlistItemWhereInput
    /**
     * Limit how many WishlistItems to delete.
     */
    limit?: number
  }

  /**
   * WishlistItem.flyerItem
   */
  export type WishlistItem$flyerItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlyerItem
     */
    select?: FlyerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlyerItem
     */
    omit?: FlyerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlyerItemInclude<ExtArgs> | null
    where?: FlyerItemWhereInput
  }

  /**
   * WishlistItem without action
   */
  export type WishlistItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistItem
     */
    select?: WishlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WishlistItem
     */
    omit?: WishlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    phone: 'phone',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    location: 'location'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StoreScalarFieldEnum: {
    id: 'id',
    name: 'name',
    logo: 'logo',
    description: 'description',
    address: 'address',
    latitude: 'latitude',
    longitude: 'longitude',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const FlyerScalarFieldEnum: {
    id: 'id',
    title: 'title',
    storeId: 'storeId',
    imageUrl: 'imageUrl',
    startDate: 'startDate',
    endDate: 'endDate',
    isSponsored: 'isSponsored',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FlyerScalarFieldEnum = (typeof FlyerScalarFieldEnum)[keyof typeof FlyerScalarFieldEnum]


  export const FlyerItemScalarFieldEnum: {
    id: 'id',
    flyerId: 'flyerId',
    name: 'name',
    price: 'price',
    oldPrice: 'oldPrice',
    imageUrl: 'imageUrl',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FlyerItemScalarFieldEnum = (typeof FlyerItemScalarFieldEnum)[keyof typeof FlyerItemScalarFieldEnum]


  export const CouponScalarFieldEnum: {
    id: 'id',
    title: 'title',
    storeId: 'storeId',
    code: 'code',
    barcodeUrl: 'barcodeUrl',
    qrCodeUrl: 'qrCodeUrl',
    discount: 'discount',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    isOnline: 'isOnline',
    isInStore: 'isInStore',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CouponScalarFieldEnum = (typeof CouponScalarFieldEnum)[keyof typeof CouponScalarFieldEnum]


  export const ShoppingListScalarFieldEnum: {
    id: 'id',
    title: 'title',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShoppingListScalarFieldEnum = (typeof ShoppingListScalarFieldEnum)[keyof typeof ShoppingListScalarFieldEnum]


  export const ShoppingListItemScalarFieldEnum: {
    id: 'id',
    shoppingListId: 'shoppingListId',
    flyerItemId: 'flyerItemId',
    name: 'name',
    quantity: 'quantity',
    isChecked: 'isChecked',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShoppingListItemScalarFieldEnum = (typeof ShoppingListItemScalarFieldEnum)[keyof typeof ShoppingListItemScalarFieldEnum]


  export const WishlistItemScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    flyerItemId: 'flyerItemId',
    name: 'name',
    targetPrice: 'targetPrice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WishlistItemScalarFieldEnum = (typeof WishlistItemScalarFieldEnum)[keyof typeof WishlistItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    location?: StringNullableFilter<"User"> | string | null
    preferredStores?: StoreListRelationFilter
    preferredCategories?: CategoryListRelationFilter
    savedFlyers?: FlyerListRelationFilter
    savedCoupons?: CouponListRelationFilter
    shoppingLists?: ShoppingListListRelationFilter
    wishlist?: WishlistItemListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    location?: SortOrderInput | SortOrder
    preferredStores?: StoreOrderByRelationAggregateInput
    preferredCategories?: CategoryOrderByRelationAggregateInput
    savedFlyers?: FlyerOrderByRelationAggregateInput
    savedCoupons?: CouponOrderByRelationAggregateInput
    shoppingLists?: ShoppingListOrderByRelationAggregateInput
    wishlist?: WishlistItemOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    phone?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    location?: StringNullableFilter<"User"> | string | null
    preferredStores?: StoreListRelationFilter
    preferredCategories?: CategoryListRelationFilter
    savedFlyers?: FlyerListRelationFilter
    savedCoupons?: CouponListRelationFilter
    shoppingLists?: ShoppingListListRelationFilter
    wishlist?: WishlistItemListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    location?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    location?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type StoreWhereInput = {
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    id?: StringFilter<"Store"> | string
    name?: StringFilter<"Store"> | string
    logo?: StringNullableFilter<"Store"> | string | null
    description?: StringNullableFilter<"Store"> | string | null
    address?: StringNullableFilter<"Store"> | string | null
    latitude?: FloatNullableFilter<"Store"> | number | null
    longitude?: FloatNullableFilter<"Store"> | number | null
    createdAt?: DateTimeFilter<"Store"> | Date | string
    updatedAt?: DateTimeFilter<"Store"> | Date | string
    flyers?: FlyerListRelationFilter
    coupons?: CouponListRelationFilter
    favoredBy?: UserListRelationFilter
    categories?: CategoryListRelationFilter
  }

  export type StoreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    flyers?: FlyerOrderByRelationAggregateInput
    coupons?: CouponOrderByRelationAggregateInput
    favoredBy?: UserOrderByRelationAggregateInput
    categories?: CategoryOrderByRelationAggregateInput
  }

  export type StoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    name?: StringFilter<"Store"> | string
    logo?: StringNullableFilter<"Store"> | string | null
    description?: StringNullableFilter<"Store"> | string | null
    address?: StringNullableFilter<"Store"> | string | null
    latitude?: FloatNullableFilter<"Store"> | number | null
    longitude?: FloatNullableFilter<"Store"> | number | null
    createdAt?: DateTimeFilter<"Store"> | Date | string
    updatedAt?: DateTimeFilter<"Store"> | Date | string
    flyers?: FlyerListRelationFilter
    coupons?: CouponListRelationFilter
    favoredBy?: UserListRelationFilter
    categories?: CategoryListRelationFilter
  }, "id">

  export type StoreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StoreCountOrderByAggregateInput
    _avg?: StoreAvgOrderByAggregateInput
    _max?: StoreMaxOrderByAggregateInput
    _min?: StoreMinOrderByAggregateInput
    _sum?: StoreSumOrderByAggregateInput
  }

  export type StoreScalarWhereWithAggregatesInput = {
    AND?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    OR?: StoreScalarWhereWithAggregatesInput[]
    NOT?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Store"> | string
    name?: StringWithAggregatesFilter<"Store"> | string
    logo?: StringNullableWithAggregatesFilter<"Store"> | string | null
    description?: StringNullableWithAggregatesFilter<"Store"> | string | null
    address?: StringNullableWithAggregatesFilter<"Store"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"Store"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Store"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Store"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Store"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    flyers?: FlyerListRelationFilter
    coupons?: CouponListRelationFilter
    stores?: StoreListRelationFilter
    preferredBy?: UserListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    flyers?: FlyerOrderByRelationAggregateInput
    coupons?: CouponOrderByRelationAggregateInput
    stores?: StoreOrderByRelationAggregateInput
    preferredBy?: UserOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    description?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    flyers?: FlyerListRelationFilter
    coupons?: CouponListRelationFilter
    stores?: StoreListRelationFilter
    preferredBy?: UserListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type FlyerWhereInput = {
    AND?: FlyerWhereInput | FlyerWhereInput[]
    OR?: FlyerWhereInput[]
    NOT?: FlyerWhereInput | FlyerWhereInput[]
    id?: StringFilter<"Flyer"> | string
    title?: StringFilter<"Flyer"> | string
    storeId?: StringFilter<"Flyer"> | string
    imageUrl?: StringFilter<"Flyer"> | string
    startDate?: DateTimeFilter<"Flyer"> | Date | string
    endDate?: DateTimeFilter<"Flyer"> | Date | string
    isSponsored?: BoolFilter<"Flyer"> | boolean
    createdAt?: DateTimeFilter<"Flyer"> | Date | string
    updatedAt?: DateTimeFilter<"Flyer"> | Date | string
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
    categories?: CategoryListRelationFilter
    savedBy?: UserListRelationFilter
    items?: FlyerItemListRelationFilter
  }

  export type FlyerOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    storeId?: SortOrder
    imageUrl?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isSponsored?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    store?: StoreOrderByWithRelationInput
    categories?: CategoryOrderByRelationAggregateInput
    savedBy?: UserOrderByRelationAggregateInput
    items?: FlyerItemOrderByRelationAggregateInput
  }

  export type FlyerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FlyerWhereInput | FlyerWhereInput[]
    OR?: FlyerWhereInput[]
    NOT?: FlyerWhereInput | FlyerWhereInput[]
    title?: StringFilter<"Flyer"> | string
    storeId?: StringFilter<"Flyer"> | string
    imageUrl?: StringFilter<"Flyer"> | string
    startDate?: DateTimeFilter<"Flyer"> | Date | string
    endDate?: DateTimeFilter<"Flyer"> | Date | string
    isSponsored?: BoolFilter<"Flyer"> | boolean
    createdAt?: DateTimeFilter<"Flyer"> | Date | string
    updatedAt?: DateTimeFilter<"Flyer"> | Date | string
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
    categories?: CategoryListRelationFilter
    savedBy?: UserListRelationFilter
    items?: FlyerItemListRelationFilter
  }, "id">

  export type FlyerOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    storeId?: SortOrder
    imageUrl?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isSponsored?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FlyerCountOrderByAggregateInput
    _max?: FlyerMaxOrderByAggregateInput
    _min?: FlyerMinOrderByAggregateInput
  }

  export type FlyerScalarWhereWithAggregatesInput = {
    AND?: FlyerScalarWhereWithAggregatesInput | FlyerScalarWhereWithAggregatesInput[]
    OR?: FlyerScalarWhereWithAggregatesInput[]
    NOT?: FlyerScalarWhereWithAggregatesInput | FlyerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Flyer"> | string
    title?: StringWithAggregatesFilter<"Flyer"> | string
    storeId?: StringWithAggregatesFilter<"Flyer"> | string
    imageUrl?: StringWithAggregatesFilter<"Flyer"> | string
    startDate?: DateTimeWithAggregatesFilter<"Flyer"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Flyer"> | Date | string
    isSponsored?: BoolWithAggregatesFilter<"Flyer"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Flyer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Flyer"> | Date | string
  }

  export type FlyerItemWhereInput = {
    AND?: FlyerItemWhereInput | FlyerItemWhereInput[]
    OR?: FlyerItemWhereInput[]
    NOT?: FlyerItemWhereInput | FlyerItemWhereInput[]
    id?: StringFilter<"FlyerItem"> | string
    flyerId?: StringFilter<"FlyerItem"> | string
    name?: StringFilter<"FlyerItem"> | string
    price?: FloatFilter<"FlyerItem"> | number
    oldPrice?: FloatNullableFilter<"FlyerItem"> | number | null
    imageUrl?: StringNullableFilter<"FlyerItem"> | string | null
    description?: StringNullableFilter<"FlyerItem"> | string | null
    createdAt?: DateTimeFilter<"FlyerItem"> | Date | string
    updatedAt?: DateTimeFilter<"FlyerItem"> | Date | string
    flyer?: XOR<FlyerScalarRelationFilter, FlyerWhereInput>
    shoppingListItems?: ShoppingListItemListRelationFilter
    wishlistItems?: WishlistItemListRelationFilter
  }

  export type FlyerItemOrderByWithRelationInput = {
    id?: SortOrder
    flyerId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    oldPrice?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    flyer?: FlyerOrderByWithRelationInput
    shoppingListItems?: ShoppingListItemOrderByRelationAggregateInput
    wishlistItems?: WishlistItemOrderByRelationAggregateInput
  }

  export type FlyerItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FlyerItemWhereInput | FlyerItemWhereInput[]
    OR?: FlyerItemWhereInput[]
    NOT?: FlyerItemWhereInput | FlyerItemWhereInput[]
    flyerId?: StringFilter<"FlyerItem"> | string
    name?: StringFilter<"FlyerItem"> | string
    price?: FloatFilter<"FlyerItem"> | number
    oldPrice?: FloatNullableFilter<"FlyerItem"> | number | null
    imageUrl?: StringNullableFilter<"FlyerItem"> | string | null
    description?: StringNullableFilter<"FlyerItem"> | string | null
    createdAt?: DateTimeFilter<"FlyerItem"> | Date | string
    updatedAt?: DateTimeFilter<"FlyerItem"> | Date | string
    flyer?: XOR<FlyerScalarRelationFilter, FlyerWhereInput>
    shoppingListItems?: ShoppingListItemListRelationFilter
    wishlistItems?: WishlistItemListRelationFilter
  }, "id">

  export type FlyerItemOrderByWithAggregationInput = {
    id?: SortOrder
    flyerId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    oldPrice?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FlyerItemCountOrderByAggregateInput
    _avg?: FlyerItemAvgOrderByAggregateInput
    _max?: FlyerItemMaxOrderByAggregateInput
    _min?: FlyerItemMinOrderByAggregateInput
    _sum?: FlyerItemSumOrderByAggregateInput
  }

  export type FlyerItemScalarWhereWithAggregatesInput = {
    AND?: FlyerItemScalarWhereWithAggregatesInput | FlyerItemScalarWhereWithAggregatesInput[]
    OR?: FlyerItemScalarWhereWithAggregatesInput[]
    NOT?: FlyerItemScalarWhereWithAggregatesInput | FlyerItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FlyerItem"> | string
    flyerId?: StringWithAggregatesFilter<"FlyerItem"> | string
    name?: StringWithAggregatesFilter<"FlyerItem"> | string
    price?: FloatWithAggregatesFilter<"FlyerItem"> | number
    oldPrice?: FloatNullableWithAggregatesFilter<"FlyerItem"> | number | null
    imageUrl?: StringNullableWithAggregatesFilter<"FlyerItem"> | string | null
    description?: StringNullableWithAggregatesFilter<"FlyerItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FlyerItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FlyerItem"> | Date | string
  }

  export type CouponWhereInput = {
    AND?: CouponWhereInput | CouponWhereInput[]
    OR?: CouponWhereInput[]
    NOT?: CouponWhereInput | CouponWhereInput[]
    id?: StringFilter<"Coupon"> | string
    title?: StringFilter<"Coupon"> | string
    storeId?: StringFilter<"Coupon"> | string
    code?: StringNullableFilter<"Coupon"> | string | null
    barcodeUrl?: StringNullableFilter<"Coupon"> | string | null
    qrCodeUrl?: StringNullableFilter<"Coupon"> | string | null
    discount?: StringFilter<"Coupon"> | string
    description?: StringNullableFilter<"Coupon"> | string | null
    startDate?: DateTimeFilter<"Coupon"> | Date | string
    endDate?: DateTimeFilter<"Coupon"> | Date | string
    isOnline?: BoolFilter<"Coupon"> | boolean
    isInStore?: BoolFilter<"Coupon"> | boolean
    createdAt?: DateTimeFilter<"Coupon"> | Date | string
    updatedAt?: DateTimeFilter<"Coupon"> | Date | string
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
    categories?: CategoryListRelationFilter
    savedBy?: UserListRelationFilter
  }

  export type CouponOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    storeId?: SortOrder
    code?: SortOrderInput | SortOrder
    barcodeUrl?: SortOrderInput | SortOrder
    qrCodeUrl?: SortOrderInput | SortOrder
    discount?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isOnline?: SortOrder
    isInStore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    store?: StoreOrderByWithRelationInput
    categories?: CategoryOrderByRelationAggregateInput
    savedBy?: UserOrderByRelationAggregateInput
  }

  export type CouponWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CouponWhereInput | CouponWhereInput[]
    OR?: CouponWhereInput[]
    NOT?: CouponWhereInput | CouponWhereInput[]
    title?: StringFilter<"Coupon"> | string
    storeId?: StringFilter<"Coupon"> | string
    code?: StringNullableFilter<"Coupon"> | string | null
    barcodeUrl?: StringNullableFilter<"Coupon"> | string | null
    qrCodeUrl?: StringNullableFilter<"Coupon"> | string | null
    discount?: StringFilter<"Coupon"> | string
    description?: StringNullableFilter<"Coupon"> | string | null
    startDate?: DateTimeFilter<"Coupon"> | Date | string
    endDate?: DateTimeFilter<"Coupon"> | Date | string
    isOnline?: BoolFilter<"Coupon"> | boolean
    isInStore?: BoolFilter<"Coupon"> | boolean
    createdAt?: DateTimeFilter<"Coupon"> | Date | string
    updatedAt?: DateTimeFilter<"Coupon"> | Date | string
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
    categories?: CategoryListRelationFilter
    savedBy?: UserListRelationFilter
  }, "id">

  export type CouponOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    storeId?: SortOrder
    code?: SortOrderInput | SortOrder
    barcodeUrl?: SortOrderInput | SortOrder
    qrCodeUrl?: SortOrderInput | SortOrder
    discount?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isOnline?: SortOrder
    isInStore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CouponCountOrderByAggregateInput
    _max?: CouponMaxOrderByAggregateInput
    _min?: CouponMinOrderByAggregateInput
  }

  export type CouponScalarWhereWithAggregatesInput = {
    AND?: CouponScalarWhereWithAggregatesInput | CouponScalarWhereWithAggregatesInput[]
    OR?: CouponScalarWhereWithAggregatesInput[]
    NOT?: CouponScalarWhereWithAggregatesInput | CouponScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Coupon"> | string
    title?: StringWithAggregatesFilter<"Coupon"> | string
    storeId?: StringWithAggregatesFilter<"Coupon"> | string
    code?: StringNullableWithAggregatesFilter<"Coupon"> | string | null
    barcodeUrl?: StringNullableWithAggregatesFilter<"Coupon"> | string | null
    qrCodeUrl?: StringNullableWithAggregatesFilter<"Coupon"> | string | null
    discount?: StringWithAggregatesFilter<"Coupon"> | string
    description?: StringNullableWithAggregatesFilter<"Coupon"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"Coupon"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Coupon"> | Date | string
    isOnline?: BoolWithAggregatesFilter<"Coupon"> | boolean
    isInStore?: BoolWithAggregatesFilter<"Coupon"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Coupon"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Coupon"> | Date | string
  }

  export type ShoppingListWhereInput = {
    AND?: ShoppingListWhereInput | ShoppingListWhereInput[]
    OR?: ShoppingListWhereInput[]
    NOT?: ShoppingListWhereInput | ShoppingListWhereInput[]
    id?: StringFilter<"ShoppingList"> | string
    title?: StringFilter<"ShoppingList"> | string
    userId?: StringFilter<"ShoppingList"> | string
    createdAt?: DateTimeFilter<"ShoppingList"> | Date | string
    updatedAt?: DateTimeFilter<"ShoppingList"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: ShoppingListItemListRelationFilter
  }

  export type ShoppingListOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    items?: ShoppingListItemOrderByRelationAggregateInput
  }

  export type ShoppingListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShoppingListWhereInput | ShoppingListWhereInput[]
    OR?: ShoppingListWhereInput[]
    NOT?: ShoppingListWhereInput | ShoppingListWhereInput[]
    title?: StringFilter<"ShoppingList"> | string
    userId?: StringFilter<"ShoppingList"> | string
    createdAt?: DateTimeFilter<"ShoppingList"> | Date | string
    updatedAt?: DateTimeFilter<"ShoppingList"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: ShoppingListItemListRelationFilter
  }, "id">

  export type ShoppingListOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShoppingListCountOrderByAggregateInput
    _max?: ShoppingListMaxOrderByAggregateInput
    _min?: ShoppingListMinOrderByAggregateInput
  }

  export type ShoppingListScalarWhereWithAggregatesInput = {
    AND?: ShoppingListScalarWhereWithAggregatesInput | ShoppingListScalarWhereWithAggregatesInput[]
    OR?: ShoppingListScalarWhereWithAggregatesInput[]
    NOT?: ShoppingListScalarWhereWithAggregatesInput | ShoppingListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShoppingList"> | string
    title?: StringWithAggregatesFilter<"ShoppingList"> | string
    userId?: StringWithAggregatesFilter<"ShoppingList"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ShoppingList"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ShoppingList"> | Date | string
  }

  export type ShoppingListItemWhereInput = {
    AND?: ShoppingListItemWhereInput | ShoppingListItemWhereInput[]
    OR?: ShoppingListItemWhereInput[]
    NOT?: ShoppingListItemWhereInput | ShoppingListItemWhereInput[]
    id?: StringFilter<"ShoppingListItem"> | string
    shoppingListId?: StringFilter<"ShoppingListItem"> | string
    flyerItemId?: StringNullableFilter<"ShoppingListItem"> | string | null
    name?: StringFilter<"ShoppingListItem"> | string
    quantity?: IntFilter<"ShoppingListItem"> | number
    isChecked?: BoolFilter<"ShoppingListItem"> | boolean
    createdAt?: DateTimeFilter<"ShoppingListItem"> | Date | string
    updatedAt?: DateTimeFilter<"ShoppingListItem"> | Date | string
    shoppingList?: XOR<ShoppingListScalarRelationFilter, ShoppingListWhereInput>
    flyerItem?: XOR<FlyerItemNullableScalarRelationFilter, FlyerItemWhereInput> | null
  }

  export type ShoppingListItemOrderByWithRelationInput = {
    id?: SortOrder
    shoppingListId?: SortOrder
    flyerItemId?: SortOrderInput | SortOrder
    name?: SortOrder
    quantity?: SortOrder
    isChecked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shoppingList?: ShoppingListOrderByWithRelationInput
    flyerItem?: FlyerItemOrderByWithRelationInput
  }

  export type ShoppingListItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShoppingListItemWhereInput | ShoppingListItemWhereInput[]
    OR?: ShoppingListItemWhereInput[]
    NOT?: ShoppingListItemWhereInput | ShoppingListItemWhereInput[]
    shoppingListId?: StringFilter<"ShoppingListItem"> | string
    flyerItemId?: StringNullableFilter<"ShoppingListItem"> | string | null
    name?: StringFilter<"ShoppingListItem"> | string
    quantity?: IntFilter<"ShoppingListItem"> | number
    isChecked?: BoolFilter<"ShoppingListItem"> | boolean
    createdAt?: DateTimeFilter<"ShoppingListItem"> | Date | string
    updatedAt?: DateTimeFilter<"ShoppingListItem"> | Date | string
    shoppingList?: XOR<ShoppingListScalarRelationFilter, ShoppingListWhereInput>
    flyerItem?: XOR<FlyerItemNullableScalarRelationFilter, FlyerItemWhereInput> | null
  }, "id">

  export type ShoppingListItemOrderByWithAggregationInput = {
    id?: SortOrder
    shoppingListId?: SortOrder
    flyerItemId?: SortOrderInput | SortOrder
    name?: SortOrder
    quantity?: SortOrder
    isChecked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShoppingListItemCountOrderByAggregateInput
    _avg?: ShoppingListItemAvgOrderByAggregateInput
    _max?: ShoppingListItemMaxOrderByAggregateInput
    _min?: ShoppingListItemMinOrderByAggregateInput
    _sum?: ShoppingListItemSumOrderByAggregateInput
  }

  export type ShoppingListItemScalarWhereWithAggregatesInput = {
    AND?: ShoppingListItemScalarWhereWithAggregatesInput | ShoppingListItemScalarWhereWithAggregatesInput[]
    OR?: ShoppingListItemScalarWhereWithAggregatesInput[]
    NOT?: ShoppingListItemScalarWhereWithAggregatesInput | ShoppingListItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShoppingListItem"> | string
    shoppingListId?: StringWithAggregatesFilter<"ShoppingListItem"> | string
    flyerItemId?: StringNullableWithAggregatesFilter<"ShoppingListItem"> | string | null
    name?: StringWithAggregatesFilter<"ShoppingListItem"> | string
    quantity?: IntWithAggregatesFilter<"ShoppingListItem"> | number
    isChecked?: BoolWithAggregatesFilter<"ShoppingListItem"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ShoppingListItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ShoppingListItem"> | Date | string
  }

  export type WishlistItemWhereInput = {
    AND?: WishlistItemWhereInput | WishlistItemWhereInput[]
    OR?: WishlistItemWhereInput[]
    NOT?: WishlistItemWhereInput | WishlistItemWhereInput[]
    id?: StringFilter<"WishlistItem"> | string
    userId?: StringFilter<"WishlistItem"> | string
    flyerItemId?: StringNullableFilter<"WishlistItem"> | string | null
    name?: StringFilter<"WishlistItem"> | string
    targetPrice?: FloatNullableFilter<"WishlistItem"> | number | null
    createdAt?: DateTimeFilter<"WishlistItem"> | Date | string
    updatedAt?: DateTimeFilter<"WishlistItem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    flyerItem?: XOR<FlyerItemNullableScalarRelationFilter, FlyerItemWhereInput> | null
  }

  export type WishlistItemOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    flyerItemId?: SortOrderInput | SortOrder
    name?: SortOrder
    targetPrice?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    flyerItem?: FlyerItemOrderByWithRelationInput
  }

  export type WishlistItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WishlistItemWhereInput | WishlistItemWhereInput[]
    OR?: WishlistItemWhereInput[]
    NOT?: WishlistItemWhereInput | WishlistItemWhereInput[]
    userId?: StringFilter<"WishlistItem"> | string
    flyerItemId?: StringNullableFilter<"WishlistItem"> | string | null
    name?: StringFilter<"WishlistItem"> | string
    targetPrice?: FloatNullableFilter<"WishlistItem"> | number | null
    createdAt?: DateTimeFilter<"WishlistItem"> | Date | string
    updatedAt?: DateTimeFilter<"WishlistItem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    flyerItem?: XOR<FlyerItemNullableScalarRelationFilter, FlyerItemWhereInput> | null
  }, "id">

  export type WishlistItemOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    flyerItemId?: SortOrderInput | SortOrder
    name?: SortOrder
    targetPrice?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WishlistItemCountOrderByAggregateInput
    _avg?: WishlistItemAvgOrderByAggregateInput
    _max?: WishlistItemMaxOrderByAggregateInput
    _min?: WishlistItemMinOrderByAggregateInput
    _sum?: WishlistItemSumOrderByAggregateInput
  }

  export type WishlistItemScalarWhereWithAggregatesInput = {
    AND?: WishlistItemScalarWhereWithAggregatesInput | WishlistItemScalarWhereWithAggregatesInput[]
    OR?: WishlistItemScalarWhereWithAggregatesInput[]
    NOT?: WishlistItemScalarWhereWithAggregatesInput | WishlistItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WishlistItem"> | string
    userId?: StringWithAggregatesFilter<"WishlistItem"> | string
    flyerItemId?: StringNullableWithAggregatesFilter<"WishlistItem"> | string | null
    name?: StringWithAggregatesFilter<"WishlistItem"> | string
    targetPrice?: FloatNullableWithAggregatesFilter<"WishlistItem"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"WishlistItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WishlistItem"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    phone?: string | null
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: string | null
    preferredStores?: StoreCreateNestedManyWithoutFavoredByInput
    preferredCategories?: CategoryCreateNestedManyWithoutPreferredByInput
    savedFlyers?: FlyerCreateNestedManyWithoutSavedByInput
    savedCoupons?: CouponCreateNestedManyWithoutSavedByInput
    shoppingLists?: ShoppingListCreateNestedManyWithoutUserInput
    wishlist?: WishlistItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    phone?: string | null
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: string | null
    preferredStores?: StoreUncheckedCreateNestedManyWithoutFavoredByInput
    preferredCategories?: CategoryUncheckedCreateNestedManyWithoutPreferredByInput
    savedFlyers?: FlyerUncheckedCreateNestedManyWithoutSavedByInput
    savedCoupons?: CouponUncheckedCreateNestedManyWithoutSavedByInput
    shoppingLists?: ShoppingListUncheckedCreateNestedManyWithoutUserInput
    wishlist?: WishlistItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    preferredStores?: StoreUpdateManyWithoutFavoredByNestedInput
    preferredCategories?: CategoryUpdateManyWithoutPreferredByNestedInput
    savedFlyers?: FlyerUpdateManyWithoutSavedByNestedInput
    savedCoupons?: CouponUpdateManyWithoutSavedByNestedInput
    shoppingLists?: ShoppingListUpdateManyWithoutUserNestedInput
    wishlist?: WishlistItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    preferredStores?: StoreUncheckedUpdateManyWithoutFavoredByNestedInput
    preferredCategories?: CategoryUncheckedUpdateManyWithoutPreferredByNestedInput
    savedFlyers?: FlyerUncheckedUpdateManyWithoutSavedByNestedInput
    savedCoupons?: CouponUncheckedUpdateManyWithoutSavedByNestedInput
    shoppingLists?: ShoppingListUncheckedUpdateManyWithoutUserNestedInput
    wishlist?: WishlistItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    phone?: string | null
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StoreCreateInput = {
    id?: string
    name: string
    logo?: string | null
    description?: string | null
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flyers?: FlyerCreateNestedManyWithoutStoreInput
    coupons?: CouponCreateNestedManyWithoutStoreInput
    favoredBy?: UserCreateNestedManyWithoutPreferredStoresInput
    categories?: CategoryCreateNestedManyWithoutStoresInput
  }

  export type StoreUncheckedCreateInput = {
    id?: string
    name: string
    logo?: string | null
    description?: string | null
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flyers?: FlyerUncheckedCreateNestedManyWithoutStoreInput
    coupons?: CouponUncheckedCreateNestedManyWithoutStoreInput
    favoredBy?: UserUncheckedCreateNestedManyWithoutPreferredStoresInput
    categories?: CategoryUncheckedCreateNestedManyWithoutStoresInput
  }

  export type StoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flyers?: FlyerUpdateManyWithoutStoreNestedInput
    coupons?: CouponUpdateManyWithoutStoreNestedInput
    favoredBy?: UserUpdateManyWithoutPreferredStoresNestedInput
    categories?: CategoryUpdateManyWithoutStoresNestedInput
  }

  export type StoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flyers?: FlyerUncheckedUpdateManyWithoutStoreNestedInput
    coupons?: CouponUncheckedUpdateManyWithoutStoreNestedInput
    favoredBy?: UserUncheckedUpdateManyWithoutPreferredStoresNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutStoresNestedInput
  }

  export type StoreCreateManyInput = {
    id?: string
    name: string
    logo?: string | null
    description?: string | null
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flyers?: FlyerCreateNestedManyWithoutCategoriesInput
    coupons?: CouponCreateNestedManyWithoutCategoriesInput
    stores?: StoreCreateNestedManyWithoutCategoriesInput
    preferredBy?: UserCreateNestedManyWithoutPreferredCategoriesInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flyers?: FlyerUncheckedCreateNestedManyWithoutCategoriesInput
    coupons?: CouponUncheckedCreateNestedManyWithoutCategoriesInput
    stores?: StoreUncheckedCreateNestedManyWithoutCategoriesInput
    preferredBy?: UserUncheckedCreateNestedManyWithoutPreferredCategoriesInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flyers?: FlyerUpdateManyWithoutCategoriesNestedInput
    coupons?: CouponUpdateManyWithoutCategoriesNestedInput
    stores?: StoreUpdateManyWithoutCategoriesNestedInput
    preferredBy?: UserUpdateManyWithoutPreferredCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flyers?: FlyerUncheckedUpdateManyWithoutCategoriesNestedInput
    coupons?: CouponUncheckedUpdateManyWithoutCategoriesNestedInput
    stores?: StoreUncheckedUpdateManyWithoutCategoriesNestedInput
    preferredBy?: UserUncheckedUpdateManyWithoutPreferredCategoriesNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlyerCreateInput = {
    id?: string
    title: string
    imageUrl: string
    startDate: Date | string
    endDate: Date | string
    isSponsored?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutFlyersInput
    categories?: CategoryCreateNestedManyWithoutFlyersInput
    savedBy?: UserCreateNestedManyWithoutSavedFlyersInput
    items?: FlyerItemCreateNestedManyWithoutFlyerInput
  }

  export type FlyerUncheckedCreateInput = {
    id?: string
    title: string
    storeId: string
    imageUrl: string
    startDate: Date | string
    endDate: Date | string
    isSponsored?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutFlyersInput
    savedBy?: UserUncheckedCreateNestedManyWithoutSavedFlyersInput
    items?: FlyerItemUncheckedCreateNestedManyWithoutFlyerInput
  }

  export type FlyerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isSponsored?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutFlyersNestedInput
    categories?: CategoryUpdateManyWithoutFlyersNestedInput
    savedBy?: UserUpdateManyWithoutSavedFlyersNestedInput
    items?: FlyerItemUpdateManyWithoutFlyerNestedInput
  }

  export type FlyerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isSponsored?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutFlyersNestedInput
    savedBy?: UserUncheckedUpdateManyWithoutSavedFlyersNestedInput
    items?: FlyerItemUncheckedUpdateManyWithoutFlyerNestedInput
  }

  export type FlyerCreateManyInput = {
    id?: string
    title: string
    storeId: string
    imageUrl: string
    startDate: Date | string
    endDate: Date | string
    isSponsored?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlyerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isSponsored?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlyerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isSponsored?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlyerItemCreateInput = {
    id?: string
    name: string
    price: number
    oldPrice?: number | null
    imageUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flyer: FlyerCreateNestedOneWithoutItemsInput
    shoppingListItems?: ShoppingListItemCreateNestedManyWithoutFlyerItemInput
    wishlistItems?: WishlistItemCreateNestedManyWithoutFlyerItemInput
  }

  export type FlyerItemUncheckedCreateInput = {
    id?: string
    flyerId: string
    name: string
    price: number
    oldPrice?: number | null
    imageUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shoppingListItems?: ShoppingListItemUncheckedCreateNestedManyWithoutFlyerItemInput
    wishlistItems?: WishlistItemUncheckedCreateNestedManyWithoutFlyerItemInput
  }

  export type FlyerItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    oldPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flyer?: FlyerUpdateOneRequiredWithoutItemsNestedInput
    shoppingListItems?: ShoppingListItemUpdateManyWithoutFlyerItemNestedInput
    wishlistItems?: WishlistItemUpdateManyWithoutFlyerItemNestedInput
  }

  export type FlyerItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    flyerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    oldPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shoppingListItems?: ShoppingListItemUncheckedUpdateManyWithoutFlyerItemNestedInput
    wishlistItems?: WishlistItemUncheckedUpdateManyWithoutFlyerItemNestedInput
  }

  export type FlyerItemCreateManyInput = {
    id?: string
    flyerId: string
    name: string
    price: number
    oldPrice?: number | null
    imageUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlyerItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    oldPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlyerItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    flyerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    oldPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponCreateInput = {
    id?: string
    title: string
    code?: string | null
    barcodeUrl?: string | null
    qrCodeUrl?: string | null
    discount: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    isOnline?: boolean
    isInStore?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutCouponsInput
    categories?: CategoryCreateNestedManyWithoutCouponsInput
    savedBy?: UserCreateNestedManyWithoutSavedCouponsInput
  }

  export type CouponUncheckedCreateInput = {
    id?: string
    title: string
    storeId: string
    code?: string | null
    barcodeUrl?: string | null
    qrCodeUrl?: string | null
    discount: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    isOnline?: boolean
    isInStore?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutCouponsInput
    savedBy?: UserUncheckedCreateNestedManyWithoutSavedCouponsInput
  }

  export type CouponUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    barcodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInStore?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutCouponsNestedInput
    categories?: CategoryUpdateManyWithoutCouponsNestedInput
    savedBy?: UserUpdateManyWithoutSavedCouponsNestedInput
  }

  export type CouponUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    barcodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInStore?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutCouponsNestedInput
    savedBy?: UserUncheckedUpdateManyWithoutSavedCouponsNestedInput
  }

  export type CouponCreateManyInput = {
    id?: string
    title: string
    storeId: string
    code?: string | null
    barcodeUrl?: string | null
    qrCodeUrl?: string | null
    discount: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    isOnline?: boolean
    isInStore?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CouponUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    barcodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInStore?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    barcodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInStore?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShoppingListCreateInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutShoppingListsInput
    items?: ShoppingListItemCreateNestedManyWithoutShoppingListInput
  }

  export type ShoppingListUncheckedCreateInput = {
    id?: string
    title: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ShoppingListItemUncheckedCreateNestedManyWithoutShoppingListInput
  }

  export type ShoppingListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutShoppingListsNestedInput
    items?: ShoppingListItemUpdateManyWithoutShoppingListNestedInput
  }

  export type ShoppingListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ShoppingListItemUncheckedUpdateManyWithoutShoppingListNestedInput
  }

  export type ShoppingListCreateManyInput = {
    id?: string
    title: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShoppingListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShoppingListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShoppingListItemCreateInput = {
    id?: string
    name: string
    quantity?: number
    isChecked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    shoppingList: ShoppingListCreateNestedOneWithoutItemsInput
    flyerItem?: FlyerItemCreateNestedOneWithoutShoppingListItemsInput
  }

  export type ShoppingListItemUncheckedCreateInput = {
    id?: string
    shoppingListId: string
    flyerItemId?: string | null
    name: string
    quantity?: number
    isChecked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShoppingListItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    isChecked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shoppingList?: ShoppingListUpdateOneRequiredWithoutItemsNestedInput
    flyerItem?: FlyerItemUpdateOneWithoutShoppingListItemsNestedInput
  }

  export type ShoppingListItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shoppingListId?: StringFieldUpdateOperationsInput | string
    flyerItemId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    isChecked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShoppingListItemCreateManyInput = {
    id?: string
    shoppingListId: string
    flyerItemId?: string | null
    name: string
    quantity?: number
    isChecked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShoppingListItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    isChecked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShoppingListItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shoppingListId?: StringFieldUpdateOperationsInput | string
    flyerItemId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    isChecked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistItemCreateInput = {
    id?: string
    name: string
    targetPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWishlistInput
    flyerItem?: FlyerItemCreateNestedOneWithoutWishlistItemsInput
  }

  export type WishlistItemUncheckedCreateInput = {
    id?: string
    userId: string
    flyerItemId?: string | null
    name: string
    targetPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WishlistItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWishlistNestedInput
    flyerItem?: FlyerItemUpdateOneWithoutWishlistItemsNestedInput
  }

  export type WishlistItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    flyerItemId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    targetPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistItemCreateManyInput = {
    id?: string
    userId: string
    flyerItemId?: string | null
    name: string
    targetPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WishlistItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    flyerItemId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    targetPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StoreListRelationFilter = {
    every?: StoreWhereInput
    some?: StoreWhereInput
    none?: StoreWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type FlyerListRelationFilter = {
    every?: FlyerWhereInput
    some?: FlyerWhereInput
    none?: FlyerWhereInput
  }

  export type CouponListRelationFilter = {
    every?: CouponWhereInput
    some?: CouponWhereInput
    none?: CouponWhereInput
  }

  export type ShoppingListListRelationFilter = {
    every?: ShoppingListWhereInput
    some?: ShoppingListWhereInput
    none?: ShoppingListWhereInput
  }

  export type WishlistItemListRelationFilter = {
    every?: WishlistItemWhereInput
    some?: WishlistItemWhereInput
    none?: WishlistItemWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlyerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CouponOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShoppingListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WishlistItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    location?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    location?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    location?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    description?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type StoreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    description?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    description?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StoreScalarRelationFilter = {
    is?: StoreWhereInput
    isNot?: StoreWhereInput
  }

  export type FlyerItemListRelationFilter = {
    every?: FlyerItemWhereInput
    some?: FlyerItemWhereInput
    none?: FlyerItemWhereInput
  }

  export type FlyerItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlyerCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    storeId?: SortOrder
    imageUrl?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isSponsored?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlyerMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    storeId?: SortOrder
    imageUrl?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isSponsored?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlyerMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    storeId?: SortOrder
    imageUrl?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isSponsored?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FlyerScalarRelationFilter = {
    is?: FlyerWhereInput
    isNot?: FlyerWhereInput
  }

  export type ShoppingListItemListRelationFilter = {
    every?: ShoppingListItemWhereInput
    some?: ShoppingListItemWhereInput
    none?: ShoppingListItemWhereInput
  }

  export type ShoppingListItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlyerItemCountOrderByAggregateInput = {
    id?: SortOrder
    flyerId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    oldPrice?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlyerItemAvgOrderByAggregateInput = {
    price?: SortOrder
    oldPrice?: SortOrder
  }

  export type FlyerItemMaxOrderByAggregateInput = {
    id?: SortOrder
    flyerId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    oldPrice?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlyerItemMinOrderByAggregateInput = {
    id?: SortOrder
    flyerId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    oldPrice?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlyerItemSumOrderByAggregateInput = {
    price?: SortOrder
    oldPrice?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CouponCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    storeId?: SortOrder
    code?: SortOrder
    barcodeUrl?: SortOrder
    qrCodeUrl?: SortOrder
    discount?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isOnline?: SortOrder
    isInStore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CouponMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    storeId?: SortOrder
    code?: SortOrder
    barcodeUrl?: SortOrder
    qrCodeUrl?: SortOrder
    discount?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isOnline?: SortOrder
    isInStore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CouponMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    storeId?: SortOrder
    code?: SortOrder
    barcodeUrl?: SortOrder
    qrCodeUrl?: SortOrder
    discount?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isOnline?: SortOrder
    isInStore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ShoppingListCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShoppingListMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShoppingListMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ShoppingListScalarRelationFilter = {
    is?: ShoppingListWhereInput
    isNot?: ShoppingListWhereInput
  }

  export type FlyerItemNullableScalarRelationFilter = {
    is?: FlyerItemWhereInput | null
    isNot?: FlyerItemWhereInput | null
  }

  export type ShoppingListItemCountOrderByAggregateInput = {
    id?: SortOrder
    shoppingListId?: SortOrder
    flyerItemId?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    isChecked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShoppingListItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type ShoppingListItemMaxOrderByAggregateInput = {
    id?: SortOrder
    shoppingListId?: SortOrder
    flyerItemId?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    isChecked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShoppingListItemMinOrderByAggregateInput = {
    id?: SortOrder
    shoppingListId?: SortOrder
    flyerItemId?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    isChecked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShoppingListItemSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type WishlistItemCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    flyerItemId?: SortOrder
    name?: SortOrder
    targetPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WishlistItemAvgOrderByAggregateInput = {
    targetPrice?: SortOrder
  }

  export type WishlistItemMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    flyerItemId?: SortOrder
    name?: SortOrder
    targetPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WishlistItemMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    flyerItemId?: SortOrder
    name?: SortOrder
    targetPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WishlistItemSumOrderByAggregateInput = {
    targetPrice?: SortOrder
  }

  export type StoreCreateNestedManyWithoutFavoredByInput = {
    create?: XOR<StoreCreateWithoutFavoredByInput, StoreUncheckedCreateWithoutFavoredByInput> | StoreCreateWithoutFavoredByInput[] | StoreUncheckedCreateWithoutFavoredByInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutFavoredByInput | StoreCreateOrConnectWithoutFavoredByInput[]
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
  }

  export type CategoryCreateNestedManyWithoutPreferredByInput = {
    create?: XOR<CategoryCreateWithoutPreferredByInput, CategoryUncheckedCreateWithoutPreferredByInput> | CategoryCreateWithoutPreferredByInput[] | CategoryUncheckedCreateWithoutPreferredByInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutPreferredByInput | CategoryCreateOrConnectWithoutPreferredByInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type FlyerCreateNestedManyWithoutSavedByInput = {
    create?: XOR<FlyerCreateWithoutSavedByInput, FlyerUncheckedCreateWithoutSavedByInput> | FlyerCreateWithoutSavedByInput[] | FlyerUncheckedCreateWithoutSavedByInput[]
    connectOrCreate?: FlyerCreateOrConnectWithoutSavedByInput | FlyerCreateOrConnectWithoutSavedByInput[]
    connect?: FlyerWhereUniqueInput | FlyerWhereUniqueInput[]
  }

  export type CouponCreateNestedManyWithoutSavedByInput = {
    create?: XOR<CouponCreateWithoutSavedByInput, CouponUncheckedCreateWithoutSavedByInput> | CouponCreateWithoutSavedByInput[] | CouponUncheckedCreateWithoutSavedByInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutSavedByInput | CouponCreateOrConnectWithoutSavedByInput[]
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
  }

  export type ShoppingListCreateNestedManyWithoutUserInput = {
    create?: XOR<ShoppingListCreateWithoutUserInput, ShoppingListUncheckedCreateWithoutUserInput> | ShoppingListCreateWithoutUserInput[] | ShoppingListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShoppingListCreateOrConnectWithoutUserInput | ShoppingListCreateOrConnectWithoutUserInput[]
    createMany?: ShoppingListCreateManyUserInputEnvelope
    connect?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
  }

  export type WishlistItemCreateNestedManyWithoutUserInput = {
    create?: XOR<WishlistItemCreateWithoutUserInput, WishlistItemUncheckedCreateWithoutUserInput> | WishlistItemCreateWithoutUserInput[] | WishlistItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishlistItemCreateOrConnectWithoutUserInput | WishlistItemCreateOrConnectWithoutUserInput[]
    createMany?: WishlistItemCreateManyUserInputEnvelope
    connect?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
  }

  export type StoreUncheckedCreateNestedManyWithoutFavoredByInput = {
    create?: XOR<StoreCreateWithoutFavoredByInput, StoreUncheckedCreateWithoutFavoredByInput> | StoreCreateWithoutFavoredByInput[] | StoreUncheckedCreateWithoutFavoredByInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutFavoredByInput | StoreCreateOrConnectWithoutFavoredByInput[]
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutPreferredByInput = {
    create?: XOR<CategoryCreateWithoutPreferredByInput, CategoryUncheckedCreateWithoutPreferredByInput> | CategoryCreateWithoutPreferredByInput[] | CategoryUncheckedCreateWithoutPreferredByInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutPreferredByInput | CategoryCreateOrConnectWithoutPreferredByInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type FlyerUncheckedCreateNestedManyWithoutSavedByInput = {
    create?: XOR<FlyerCreateWithoutSavedByInput, FlyerUncheckedCreateWithoutSavedByInput> | FlyerCreateWithoutSavedByInput[] | FlyerUncheckedCreateWithoutSavedByInput[]
    connectOrCreate?: FlyerCreateOrConnectWithoutSavedByInput | FlyerCreateOrConnectWithoutSavedByInput[]
    connect?: FlyerWhereUniqueInput | FlyerWhereUniqueInput[]
  }

  export type CouponUncheckedCreateNestedManyWithoutSavedByInput = {
    create?: XOR<CouponCreateWithoutSavedByInput, CouponUncheckedCreateWithoutSavedByInput> | CouponCreateWithoutSavedByInput[] | CouponUncheckedCreateWithoutSavedByInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutSavedByInput | CouponCreateOrConnectWithoutSavedByInput[]
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
  }

  export type ShoppingListUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ShoppingListCreateWithoutUserInput, ShoppingListUncheckedCreateWithoutUserInput> | ShoppingListCreateWithoutUserInput[] | ShoppingListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShoppingListCreateOrConnectWithoutUserInput | ShoppingListCreateOrConnectWithoutUserInput[]
    createMany?: ShoppingListCreateManyUserInputEnvelope
    connect?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
  }

  export type WishlistItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WishlistItemCreateWithoutUserInput, WishlistItemUncheckedCreateWithoutUserInput> | WishlistItemCreateWithoutUserInput[] | WishlistItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishlistItemCreateOrConnectWithoutUserInput | WishlistItemCreateOrConnectWithoutUserInput[]
    createMany?: WishlistItemCreateManyUserInputEnvelope
    connect?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StoreUpdateManyWithoutFavoredByNestedInput = {
    create?: XOR<StoreCreateWithoutFavoredByInput, StoreUncheckedCreateWithoutFavoredByInput> | StoreCreateWithoutFavoredByInput[] | StoreUncheckedCreateWithoutFavoredByInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutFavoredByInput | StoreCreateOrConnectWithoutFavoredByInput[]
    upsert?: StoreUpsertWithWhereUniqueWithoutFavoredByInput | StoreUpsertWithWhereUniqueWithoutFavoredByInput[]
    set?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    disconnect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    delete?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    update?: StoreUpdateWithWhereUniqueWithoutFavoredByInput | StoreUpdateWithWhereUniqueWithoutFavoredByInput[]
    updateMany?: StoreUpdateManyWithWhereWithoutFavoredByInput | StoreUpdateManyWithWhereWithoutFavoredByInput[]
    deleteMany?: StoreScalarWhereInput | StoreScalarWhereInput[]
  }

  export type CategoryUpdateManyWithoutPreferredByNestedInput = {
    create?: XOR<CategoryCreateWithoutPreferredByInput, CategoryUncheckedCreateWithoutPreferredByInput> | CategoryCreateWithoutPreferredByInput[] | CategoryUncheckedCreateWithoutPreferredByInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutPreferredByInput | CategoryCreateOrConnectWithoutPreferredByInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutPreferredByInput | CategoryUpsertWithWhereUniqueWithoutPreferredByInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutPreferredByInput | CategoryUpdateWithWhereUniqueWithoutPreferredByInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutPreferredByInput | CategoryUpdateManyWithWhereWithoutPreferredByInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type FlyerUpdateManyWithoutSavedByNestedInput = {
    create?: XOR<FlyerCreateWithoutSavedByInput, FlyerUncheckedCreateWithoutSavedByInput> | FlyerCreateWithoutSavedByInput[] | FlyerUncheckedCreateWithoutSavedByInput[]
    connectOrCreate?: FlyerCreateOrConnectWithoutSavedByInput | FlyerCreateOrConnectWithoutSavedByInput[]
    upsert?: FlyerUpsertWithWhereUniqueWithoutSavedByInput | FlyerUpsertWithWhereUniqueWithoutSavedByInput[]
    set?: FlyerWhereUniqueInput | FlyerWhereUniqueInput[]
    disconnect?: FlyerWhereUniqueInput | FlyerWhereUniqueInput[]
    delete?: FlyerWhereUniqueInput | FlyerWhereUniqueInput[]
    connect?: FlyerWhereUniqueInput | FlyerWhereUniqueInput[]
    update?: FlyerUpdateWithWhereUniqueWithoutSavedByInput | FlyerUpdateWithWhereUniqueWithoutSavedByInput[]
    updateMany?: FlyerUpdateManyWithWhereWithoutSavedByInput | FlyerUpdateManyWithWhereWithoutSavedByInput[]
    deleteMany?: FlyerScalarWhereInput | FlyerScalarWhereInput[]
  }

  export type CouponUpdateManyWithoutSavedByNestedInput = {
    create?: XOR<CouponCreateWithoutSavedByInput, CouponUncheckedCreateWithoutSavedByInput> | CouponCreateWithoutSavedByInput[] | CouponUncheckedCreateWithoutSavedByInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutSavedByInput | CouponCreateOrConnectWithoutSavedByInput[]
    upsert?: CouponUpsertWithWhereUniqueWithoutSavedByInput | CouponUpsertWithWhereUniqueWithoutSavedByInput[]
    set?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    disconnect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    delete?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    update?: CouponUpdateWithWhereUniqueWithoutSavedByInput | CouponUpdateWithWhereUniqueWithoutSavedByInput[]
    updateMany?: CouponUpdateManyWithWhereWithoutSavedByInput | CouponUpdateManyWithWhereWithoutSavedByInput[]
    deleteMany?: CouponScalarWhereInput | CouponScalarWhereInput[]
  }

  export type ShoppingListUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShoppingListCreateWithoutUserInput, ShoppingListUncheckedCreateWithoutUserInput> | ShoppingListCreateWithoutUserInput[] | ShoppingListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShoppingListCreateOrConnectWithoutUserInput | ShoppingListCreateOrConnectWithoutUserInput[]
    upsert?: ShoppingListUpsertWithWhereUniqueWithoutUserInput | ShoppingListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShoppingListCreateManyUserInputEnvelope
    set?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
    disconnect?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
    delete?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
    connect?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
    update?: ShoppingListUpdateWithWhereUniqueWithoutUserInput | ShoppingListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShoppingListUpdateManyWithWhereWithoutUserInput | ShoppingListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShoppingListScalarWhereInput | ShoppingListScalarWhereInput[]
  }

  export type WishlistItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<WishlistItemCreateWithoutUserInput, WishlistItemUncheckedCreateWithoutUserInput> | WishlistItemCreateWithoutUserInput[] | WishlistItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishlistItemCreateOrConnectWithoutUserInput | WishlistItemCreateOrConnectWithoutUserInput[]
    upsert?: WishlistItemUpsertWithWhereUniqueWithoutUserInput | WishlistItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WishlistItemCreateManyUserInputEnvelope
    set?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    disconnect?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    delete?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    connect?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    update?: WishlistItemUpdateWithWhereUniqueWithoutUserInput | WishlistItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WishlistItemUpdateManyWithWhereWithoutUserInput | WishlistItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WishlistItemScalarWhereInput | WishlistItemScalarWhereInput[]
  }

  export type StoreUncheckedUpdateManyWithoutFavoredByNestedInput = {
    create?: XOR<StoreCreateWithoutFavoredByInput, StoreUncheckedCreateWithoutFavoredByInput> | StoreCreateWithoutFavoredByInput[] | StoreUncheckedCreateWithoutFavoredByInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutFavoredByInput | StoreCreateOrConnectWithoutFavoredByInput[]
    upsert?: StoreUpsertWithWhereUniqueWithoutFavoredByInput | StoreUpsertWithWhereUniqueWithoutFavoredByInput[]
    set?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    disconnect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    delete?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    update?: StoreUpdateWithWhereUniqueWithoutFavoredByInput | StoreUpdateWithWhereUniqueWithoutFavoredByInput[]
    updateMany?: StoreUpdateManyWithWhereWithoutFavoredByInput | StoreUpdateManyWithWhereWithoutFavoredByInput[]
    deleteMany?: StoreScalarWhereInput | StoreScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutPreferredByNestedInput = {
    create?: XOR<CategoryCreateWithoutPreferredByInput, CategoryUncheckedCreateWithoutPreferredByInput> | CategoryCreateWithoutPreferredByInput[] | CategoryUncheckedCreateWithoutPreferredByInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutPreferredByInput | CategoryCreateOrConnectWithoutPreferredByInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutPreferredByInput | CategoryUpsertWithWhereUniqueWithoutPreferredByInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutPreferredByInput | CategoryUpdateWithWhereUniqueWithoutPreferredByInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutPreferredByInput | CategoryUpdateManyWithWhereWithoutPreferredByInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type FlyerUncheckedUpdateManyWithoutSavedByNestedInput = {
    create?: XOR<FlyerCreateWithoutSavedByInput, FlyerUncheckedCreateWithoutSavedByInput> | FlyerCreateWithoutSavedByInput[] | FlyerUncheckedCreateWithoutSavedByInput[]
    connectOrCreate?: FlyerCreateOrConnectWithoutSavedByInput | FlyerCreateOrConnectWithoutSavedByInput[]
    upsert?: FlyerUpsertWithWhereUniqueWithoutSavedByInput | FlyerUpsertWithWhereUniqueWithoutSavedByInput[]
    set?: FlyerWhereUniqueInput | FlyerWhereUniqueInput[]
    disconnect?: FlyerWhereUniqueInput | FlyerWhereUniqueInput[]
    delete?: FlyerWhereUniqueInput | FlyerWhereUniqueInput[]
    connect?: FlyerWhereUniqueInput | FlyerWhereUniqueInput[]
    update?: FlyerUpdateWithWhereUniqueWithoutSavedByInput | FlyerUpdateWithWhereUniqueWithoutSavedByInput[]
    updateMany?: FlyerUpdateManyWithWhereWithoutSavedByInput | FlyerUpdateManyWithWhereWithoutSavedByInput[]
    deleteMany?: FlyerScalarWhereInput | FlyerScalarWhereInput[]
  }

  export type CouponUncheckedUpdateManyWithoutSavedByNestedInput = {
    create?: XOR<CouponCreateWithoutSavedByInput, CouponUncheckedCreateWithoutSavedByInput> | CouponCreateWithoutSavedByInput[] | CouponUncheckedCreateWithoutSavedByInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutSavedByInput | CouponCreateOrConnectWithoutSavedByInput[]
    upsert?: CouponUpsertWithWhereUniqueWithoutSavedByInput | CouponUpsertWithWhereUniqueWithoutSavedByInput[]
    set?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    disconnect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    delete?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    update?: CouponUpdateWithWhereUniqueWithoutSavedByInput | CouponUpdateWithWhereUniqueWithoutSavedByInput[]
    updateMany?: CouponUpdateManyWithWhereWithoutSavedByInput | CouponUpdateManyWithWhereWithoutSavedByInput[]
    deleteMany?: CouponScalarWhereInput | CouponScalarWhereInput[]
  }

  export type ShoppingListUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShoppingListCreateWithoutUserInput, ShoppingListUncheckedCreateWithoutUserInput> | ShoppingListCreateWithoutUserInput[] | ShoppingListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShoppingListCreateOrConnectWithoutUserInput | ShoppingListCreateOrConnectWithoutUserInput[]
    upsert?: ShoppingListUpsertWithWhereUniqueWithoutUserInput | ShoppingListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShoppingListCreateManyUserInputEnvelope
    set?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
    disconnect?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
    delete?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
    connect?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
    update?: ShoppingListUpdateWithWhereUniqueWithoutUserInput | ShoppingListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShoppingListUpdateManyWithWhereWithoutUserInput | ShoppingListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShoppingListScalarWhereInput | ShoppingListScalarWhereInput[]
  }

  export type WishlistItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WishlistItemCreateWithoutUserInput, WishlistItemUncheckedCreateWithoutUserInput> | WishlistItemCreateWithoutUserInput[] | WishlistItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishlistItemCreateOrConnectWithoutUserInput | WishlistItemCreateOrConnectWithoutUserInput[]
    upsert?: WishlistItemUpsertWithWhereUniqueWithoutUserInput | WishlistItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WishlistItemCreateManyUserInputEnvelope
    set?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    disconnect?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    delete?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    connect?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    update?: WishlistItemUpdateWithWhereUniqueWithoutUserInput | WishlistItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WishlistItemUpdateManyWithWhereWithoutUserInput | WishlistItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WishlistItemScalarWhereInput | WishlistItemScalarWhereInput[]
  }

  export type FlyerCreateNestedManyWithoutStoreInput = {
    create?: XOR<FlyerCreateWithoutStoreInput, FlyerUncheckedCreateWithoutStoreInput> | FlyerCreateWithoutStoreInput[] | FlyerUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: FlyerCreateOrConnectWithoutStoreInput | FlyerCreateOrConnectWithoutStoreInput[]
    createMany?: FlyerCreateManyStoreInputEnvelope
    connect?: FlyerWhereUniqueInput | FlyerWhereUniqueInput[]
  }

  export type CouponCreateNestedManyWithoutStoreInput = {
    create?: XOR<CouponCreateWithoutStoreInput, CouponUncheckedCreateWithoutStoreInput> | CouponCreateWithoutStoreInput[] | CouponUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutStoreInput | CouponCreateOrConnectWithoutStoreInput[]
    createMany?: CouponCreateManyStoreInputEnvelope
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutPreferredStoresInput = {
    create?: XOR<UserCreateWithoutPreferredStoresInput, UserUncheckedCreateWithoutPreferredStoresInput> | UserCreateWithoutPreferredStoresInput[] | UserUncheckedCreateWithoutPreferredStoresInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPreferredStoresInput | UserCreateOrConnectWithoutPreferredStoresInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CategoryCreateNestedManyWithoutStoresInput = {
    create?: XOR<CategoryCreateWithoutStoresInput, CategoryUncheckedCreateWithoutStoresInput> | CategoryCreateWithoutStoresInput[] | CategoryUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutStoresInput | CategoryCreateOrConnectWithoutStoresInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type FlyerUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<FlyerCreateWithoutStoreInput, FlyerUncheckedCreateWithoutStoreInput> | FlyerCreateWithoutStoreInput[] | FlyerUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: FlyerCreateOrConnectWithoutStoreInput | FlyerCreateOrConnectWithoutStoreInput[]
    createMany?: FlyerCreateManyStoreInputEnvelope
    connect?: FlyerWhereUniqueInput | FlyerWhereUniqueInput[]
  }

  export type CouponUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<CouponCreateWithoutStoreInput, CouponUncheckedCreateWithoutStoreInput> | CouponCreateWithoutStoreInput[] | CouponUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutStoreInput | CouponCreateOrConnectWithoutStoreInput[]
    createMany?: CouponCreateManyStoreInputEnvelope
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutPreferredStoresInput = {
    create?: XOR<UserCreateWithoutPreferredStoresInput, UserUncheckedCreateWithoutPreferredStoresInput> | UserCreateWithoutPreferredStoresInput[] | UserUncheckedCreateWithoutPreferredStoresInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPreferredStoresInput | UserCreateOrConnectWithoutPreferredStoresInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutStoresInput = {
    create?: XOR<CategoryCreateWithoutStoresInput, CategoryUncheckedCreateWithoutStoresInput> | CategoryCreateWithoutStoresInput[] | CategoryUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutStoresInput | CategoryCreateOrConnectWithoutStoresInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FlyerUpdateManyWithoutStoreNestedInput = {
    create?: XOR<FlyerCreateWithoutStoreInput, FlyerUncheckedCreateWithoutStoreInput> | FlyerCreateWithoutStoreInput[] | FlyerUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: FlyerCreateOrConnectWithoutStoreInput | FlyerCreateOrConnectWithoutStoreInput[]
    upsert?: FlyerUpsertWithWhereUniqueWithoutStoreInput | FlyerUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: FlyerCreateManyStoreInputEnvelope
    set?: FlyerWhereUniqueInput | FlyerWhereUniqueInput[]
    disconnect?: FlyerWhereUniqueInput | FlyerWhereUniqueInput[]
    delete?: FlyerWhereUniqueInput | FlyerWhereUniqueInput[]
    connect?: FlyerWhereUniqueInput | FlyerWhereUniqueInput[]
    update?: FlyerUpdateWithWhereUniqueWithoutStoreInput | FlyerUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: FlyerUpdateManyWithWhereWithoutStoreInput | FlyerUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: FlyerScalarWhereInput | FlyerScalarWhereInput[]
  }

  export type CouponUpdateManyWithoutStoreNestedInput = {
    create?: XOR<CouponCreateWithoutStoreInput, CouponUncheckedCreateWithoutStoreInput> | CouponCreateWithoutStoreInput[] | CouponUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutStoreInput | CouponCreateOrConnectWithoutStoreInput[]
    upsert?: CouponUpsertWithWhereUniqueWithoutStoreInput | CouponUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: CouponCreateManyStoreInputEnvelope
    set?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    disconnect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    delete?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    update?: CouponUpdateWithWhereUniqueWithoutStoreInput | CouponUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: CouponUpdateManyWithWhereWithoutStoreInput | CouponUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: CouponScalarWhereInput | CouponScalarWhereInput[]
  }

  export type UserUpdateManyWithoutPreferredStoresNestedInput = {
    create?: XOR<UserCreateWithoutPreferredStoresInput, UserUncheckedCreateWithoutPreferredStoresInput> | UserCreateWithoutPreferredStoresInput[] | UserUncheckedCreateWithoutPreferredStoresInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPreferredStoresInput | UserCreateOrConnectWithoutPreferredStoresInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPreferredStoresInput | UserUpsertWithWhereUniqueWithoutPreferredStoresInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPreferredStoresInput | UserUpdateWithWhereUniqueWithoutPreferredStoresInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPreferredStoresInput | UserUpdateManyWithWhereWithoutPreferredStoresInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CategoryUpdateManyWithoutStoresNestedInput = {
    create?: XOR<CategoryCreateWithoutStoresInput, CategoryUncheckedCreateWithoutStoresInput> | CategoryCreateWithoutStoresInput[] | CategoryUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutStoresInput | CategoryCreateOrConnectWithoutStoresInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutStoresInput | CategoryUpsertWithWhereUniqueWithoutStoresInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutStoresInput | CategoryUpdateWithWhereUniqueWithoutStoresInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutStoresInput | CategoryUpdateManyWithWhereWithoutStoresInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type FlyerUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<FlyerCreateWithoutStoreInput, FlyerUncheckedCreateWithoutStoreInput> | FlyerCreateWithoutStoreInput[] | FlyerUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: FlyerCreateOrConnectWithoutStoreInput | FlyerCreateOrConnectWithoutStoreInput[]
    upsert?: FlyerUpsertWithWhereUniqueWithoutStoreInput | FlyerUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: FlyerCreateManyStoreInputEnvelope
    set?: FlyerWhereUniqueInput | FlyerWhereUniqueInput[]
    disconnect?: FlyerWhereUniqueInput | FlyerWhereUniqueInput[]
    delete?: FlyerWhereUniqueInput | FlyerWhereUniqueInput[]
    connect?: FlyerWhereUniqueInput | FlyerWhereUniqueInput[]
    update?: FlyerUpdateWithWhereUniqueWithoutStoreInput | FlyerUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: FlyerUpdateManyWithWhereWithoutStoreInput | FlyerUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: FlyerScalarWhereInput | FlyerScalarWhereInput[]
  }

  export type CouponUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<CouponCreateWithoutStoreInput, CouponUncheckedCreateWithoutStoreInput> | CouponCreateWithoutStoreInput[] | CouponUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutStoreInput | CouponCreateOrConnectWithoutStoreInput[]
    upsert?: CouponUpsertWithWhereUniqueWithoutStoreInput | CouponUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: CouponCreateManyStoreInputEnvelope
    set?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    disconnect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    delete?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    update?: CouponUpdateWithWhereUniqueWithoutStoreInput | CouponUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: CouponUpdateManyWithWhereWithoutStoreInput | CouponUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: CouponScalarWhereInput | CouponScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutPreferredStoresNestedInput = {
    create?: XOR<UserCreateWithoutPreferredStoresInput, UserUncheckedCreateWithoutPreferredStoresInput> | UserCreateWithoutPreferredStoresInput[] | UserUncheckedCreateWithoutPreferredStoresInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPreferredStoresInput | UserCreateOrConnectWithoutPreferredStoresInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPreferredStoresInput | UserUpsertWithWhereUniqueWithoutPreferredStoresInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPreferredStoresInput | UserUpdateWithWhereUniqueWithoutPreferredStoresInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPreferredStoresInput | UserUpdateManyWithWhereWithoutPreferredStoresInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutStoresNestedInput = {
    create?: XOR<CategoryCreateWithoutStoresInput, CategoryUncheckedCreateWithoutStoresInput> | CategoryCreateWithoutStoresInput[] | CategoryUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutStoresInput | CategoryCreateOrConnectWithoutStoresInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutStoresInput | CategoryUpsertWithWhereUniqueWithoutStoresInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutStoresInput | CategoryUpdateWithWhereUniqueWithoutStoresInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutStoresInput | CategoryUpdateManyWithWhereWithoutStoresInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type FlyerCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<FlyerCreateWithoutCategoriesInput, FlyerUncheckedCreateWithoutCategoriesInput> | FlyerCreateWithoutCategoriesInput[] | FlyerUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: FlyerCreateOrConnectWithoutCategoriesInput | FlyerCreateOrConnectWithoutCategoriesInput[]
    connect?: FlyerWhereUniqueInput | FlyerWhereUniqueInput[]
  }

  export type CouponCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<CouponCreateWithoutCategoriesInput, CouponUncheckedCreateWithoutCategoriesInput> | CouponCreateWithoutCategoriesInput[] | CouponUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutCategoriesInput | CouponCreateOrConnectWithoutCategoriesInput[]
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
  }

  export type StoreCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<StoreCreateWithoutCategoriesInput, StoreUncheckedCreateWithoutCategoriesInput> | StoreCreateWithoutCategoriesInput[] | StoreUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutCategoriesInput | StoreCreateOrConnectWithoutCategoriesInput[]
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutPreferredCategoriesInput = {
    create?: XOR<UserCreateWithoutPreferredCategoriesInput, UserUncheckedCreateWithoutPreferredCategoriesInput> | UserCreateWithoutPreferredCategoriesInput[] | UserUncheckedCreateWithoutPreferredCategoriesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPreferredCategoriesInput | UserCreateOrConnectWithoutPreferredCategoriesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type FlyerUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<FlyerCreateWithoutCategoriesInput, FlyerUncheckedCreateWithoutCategoriesInput> | FlyerCreateWithoutCategoriesInput[] | FlyerUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: FlyerCreateOrConnectWithoutCategoriesInput | FlyerCreateOrConnectWithoutCategoriesInput[]
    connect?: FlyerWhereUniqueInput | FlyerWhereUniqueInput[]
  }

  export type CouponUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<CouponCreateWithoutCategoriesInput, CouponUncheckedCreateWithoutCategoriesInput> | CouponCreateWithoutCategoriesInput[] | CouponUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutCategoriesInput | CouponCreateOrConnectWithoutCategoriesInput[]
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
  }

  export type StoreUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<StoreCreateWithoutCategoriesInput, StoreUncheckedCreateWithoutCategoriesInput> | StoreCreateWithoutCategoriesInput[] | StoreUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutCategoriesInput | StoreCreateOrConnectWithoutCategoriesInput[]
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutPreferredCategoriesInput = {
    create?: XOR<UserCreateWithoutPreferredCategoriesInput, UserUncheckedCreateWithoutPreferredCategoriesInput> | UserCreateWithoutPreferredCategoriesInput[] | UserUncheckedCreateWithoutPreferredCategoriesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPreferredCategoriesInput | UserCreateOrConnectWithoutPreferredCategoriesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type FlyerUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<FlyerCreateWithoutCategoriesInput, FlyerUncheckedCreateWithoutCategoriesInput> | FlyerCreateWithoutCategoriesInput[] | FlyerUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: FlyerCreateOrConnectWithoutCategoriesInput | FlyerCreateOrConnectWithoutCategoriesInput[]
    upsert?: FlyerUpsertWithWhereUniqueWithoutCategoriesInput | FlyerUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: FlyerWhereUniqueInput | FlyerWhereUniqueInput[]
    disconnect?: FlyerWhereUniqueInput | FlyerWhereUniqueInput[]
    delete?: FlyerWhereUniqueInput | FlyerWhereUniqueInput[]
    connect?: FlyerWhereUniqueInput | FlyerWhereUniqueInput[]
    update?: FlyerUpdateWithWhereUniqueWithoutCategoriesInput | FlyerUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: FlyerUpdateManyWithWhereWithoutCategoriesInput | FlyerUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: FlyerScalarWhereInput | FlyerScalarWhereInput[]
  }

  export type CouponUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<CouponCreateWithoutCategoriesInput, CouponUncheckedCreateWithoutCategoriesInput> | CouponCreateWithoutCategoriesInput[] | CouponUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutCategoriesInput | CouponCreateOrConnectWithoutCategoriesInput[]
    upsert?: CouponUpsertWithWhereUniqueWithoutCategoriesInput | CouponUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    disconnect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    delete?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    update?: CouponUpdateWithWhereUniqueWithoutCategoriesInput | CouponUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: CouponUpdateManyWithWhereWithoutCategoriesInput | CouponUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: CouponScalarWhereInput | CouponScalarWhereInput[]
  }

  export type StoreUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<StoreCreateWithoutCategoriesInput, StoreUncheckedCreateWithoutCategoriesInput> | StoreCreateWithoutCategoriesInput[] | StoreUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutCategoriesInput | StoreCreateOrConnectWithoutCategoriesInput[]
    upsert?: StoreUpsertWithWhereUniqueWithoutCategoriesInput | StoreUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    disconnect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    delete?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    update?: StoreUpdateWithWhereUniqueWithoutCategoriesInput | StoreUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: StoreUpdateManyWithWhereWithoutCategoriesInput | StoreUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: StoreScalarWhereInput | StoreScalarWhereInput[]
  }

  export type UserUpdateManyWithoutPreferredCategoriesNestedInput = {
    create?: XOR<UserCreateWithoutPreferredCategoriesInput, UserUncheckedCreateWithoutPreferredCategoriesInput> | UserCreateWithoutPreferredCategoriesInput[] | UserUncheckedCreateWithoutPreferredCategoriesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPreferredCategoriesInput | UserCreateOrConnectWithoutPreferredCategoriesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPreferredCategoriesInput | UserUpsertWithWhereUniqueWithoutPreferredCategoriesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPreferredCategoriesInput | UserUpdateWithWhereUniqueWithoutPreferredCategoriesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPreferredCategoriesInput | UserUpdateManyWithWhereWithoutPreferredCategoriesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type FlyerUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<FlyerCreateWithoutCategoriesInput, FlyerUncheckedCreateWithoutCategoriesInput> | FlyerCreateWithoutCategoriesInput[] | FlyerUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: FlyerCreateOrConnectWithoutCategoriesInput | FlyerCreateOrConnectWithoutCategoriesInput[]
    upsert?: FlyerUpsertWithWhereUniqueWithoutCategoriesInput | FlyerUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: FlyerWhereUniqueInput | FlyerWhereUniqueInput[]
    disconnect?: FlyerWhereUniqueInput | FlyerWhereUniqueInput[]
    delete?: FlyerWhereUniqueInput | FlyerWhereUniqueInput[]
    connect?: FlyerWhereUniqueInput | FlyerWhereUniqueInput[]
    update?: FlyerUpdateWithWhereUniqueWithoutCategoriesInput | FlyerUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: FlyerUpdateManyWithWhereWithoutCategoriesInput | FlyerUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: FlyerScalarWhereInput | FlyerScalarWhereInput[]
  }

  export type CouponUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<CouponCreateWithoutCategoriesInput, CouponUncheckedCreateWithoutCategoriesInput> | CouponCreateWithoutCategoriesInput[] | CouponUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutCategoriesInput | CouponCreateOrConnectWithoutCategoriesInput[]
    upsert?: CouponUpsertWithWhereUniqueWithoutCategoriesInput | CouponUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    disconnect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    delete?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    update?: CouponUpdateWithWhereUniqueWithoutCategoriesInput | CouponUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: CouponUpdateManyWithWhereWithoutCategoriesInput | CouponUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: CouponScalarWhereInput | CouponScalarWhereInput[]
  }

  export type StoreUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<StoreCreateWithoutCategoriesInput, StoreUncheckedCreateWithoutCategoriesInput> | StoreCreateWithoutCategoriesInput[] | StoreUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutCategoriesInput | StoreCreateOrConnectWithoutCategoriesInput[]
    upsert?: StoreUpsertWithWhereUniqueWithoutCategoriesInput | StoreUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    disconnect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    delete?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    update?: StoreUpdateWithWhereUniqueWithoutCategoriesInput | StoreUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: StoreUpdateManyWithWhereWithoutCategoriesInput | StoreUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: StoreScalarWhereInput | StoreScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutPreferredCategoriesNestedInput = {
    create?: XOR<UserCreateWithoutPreferredCategoriesInput, UserUncheckedCreateWithoutPreferredCategoriesInput> | UserCreateWithoutPreferredCategoriesInput[] | UserUncheckedCreateWithoutPreferredCategoriesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPreferredCategoriesInput | UserCreateOrConnectWithoutPreferredCategoriesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPreferredCategoriesInput | UserUpsertWithWhereUniqueWithoutPreferredCategoriesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPreferredCategoriesInput | UserUpdateWithWhereUniqueWithoutPreferredCategoriesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPreferredCategoriesInput | UserUpdateManyWithWhereWithoutPreferredCategoriesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type StoreCreateNestedOneWithoutFlyersInput = {
    create?: XOR<StoreCreateWithoutFlyersInput, StoreUncheckedCreateWithoutFlyersInput>
    connectOrCreate?: StoreCreateOrConnectWithoutFlyersInput
    connect?: StoreWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutFlyersInput = {
    create?: XOR<CategoryCreateWithoutFlyersInput, CategoryUncheckedCreateWithoutFlyersInput> | CategoryCreateWithoutFlyersInput[] | CategoryUncheckedCreateWithoutFlyersInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutFlyersInput | CategoryCreateOrConnectWithoutFlyersInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutSavedFlyersInput = {
    create?: XOR<UserCreateWithoutSavedFlyersInput, UserUncheckedCreateWithoutSavedFlyersInput> | UserCreateWithoutSavedFlyersInput[] | UserUncheckedCreateWithoutSavedFlyersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSavedFlyersInput | UserCreateOrConnectWithoutSavedFlyersInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type FlyerItemCreateNestedManyWithoutFlyerInput = {
    create?: XOR<FlyerItemCreateWithoutFlyerInput, FlyerItemUncheckedCreateWithoutFlyerInput> | FlyerItemCreateWithoutFlyerInput[] | FlyerItemUncheckedCreateWithoutFlyerInput[]
    connectOrCreate?: FlyerItemCreateOrConnectWithoutFlyerInput | FlyerItemCreateOrConnectWithoutFlyerInput[]
    createMany?: FlyerItemCreateManyFlyerInputEnvelope
    connect?: FlyerItemWhereUniqueInput | FlyerItemWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutFlyersInput = {
    create?: XOR<CategoryCreateWithoutFlyersInput, CategoryUncheckedCreateWithoutFlyersInput> | CategoryCreateWithoutFlyersInput[] | CategoryUncheckedCreateWithoutFlyersInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutFlyersInput | CategoryCreateOrConnectWithoutFlyersInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutSavedFlyersInput = {
    create?: XOR<UserCreateWithoutSavedFlyersInput, UserUncheckedCreateWithoutSavedFlyersInput> | UserCreateWithoutSavedFlyersInput[] | UserUncheckedCreateWithoutSavedFlyersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSavedFlyersInput | UserCreateOrConnectWithoutSavedFlyersInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type FlyerItemUncheckedCreateNestedManyWithoutFlyerInput = {
    create?: XOR<FlyerItemCreateWithoutFlyerInput, FlyerItemUncheckedCreateWithoutFlyerInput> | FlyerItemCreateWithoutFlyerInput[] | FlyerItemUncheckedCreateWithoutFlyerInput[]
    connectOrCreate?: FlyerItemCreateOrConnectWithoutFlyerInput | FlyerItemCreateOrConnectWithoutFlyerInput[]
    createMany?: FlyerItemCreateManyFlyerInputEnvelope
    connect?: FlyerItemWhereUniqueInput | FlyerItemWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StoreUpdateOneRequiredWithoutFlyersNestedInput = {
    create?: XOR<StoreCreateWithoutFlyersInput, StoreUncheckedCreateWithoutFlyersInput>
    connectOrCreate?: StoreCreateOrConnectWithoutFlyersInput
    upsert?: StoreUpsertWithoutFlyersInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutFlyersInput, StoreUpdateWithoutFlyersInput>, StoreUncheckedUpdateWithoutFlyersInput>
  }

  export type CategoryUpdateManyWithoutFlyersNestedInput = {
    create?: XOR<CategoryCreateWithoutFlyersInput, CategoryUncheckedCreateWithoutFlyersInput> | CategoryCreateWithoutFlyersInput[] | CategoryUncheckedCreateWithoutFlyersInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutFlyersInput | CategoryCreateOrConnectWithoutFlyersInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutFlyersInput | CategoryUpsertWithWhereUniqueWithoutFlyersInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutFlyersInput | CategoryUpdateWithWhereUniqueWithoutFlyersInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutFlyersInput | CategoryUpdateManyWithWhereWithoutFlyersInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type UserUpdateManyWithoutSavedFlyersNestedInput = {
    create?: XOR<UserCreateWithoutSavedFlyersInput, UserUncheckedCreateWithoutSavedFlyersInput> | UserCreateWithoutSavedFlyersInput[] | UserUncheckedCreateWithoutSavedFlyersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSavedFlyersInput | UserCreateOrConnectWithoutSavedFlyersInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSavedFlyersInput | UserUpsertWithWhereUniqueWithoutSavedFlyersInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSavedFlyersInput | UserUpdateWithWhereUniqueWithoutSavedFlyersInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSavedFlyersInput | UserUpdateManyWithWhereWithoutSavedFlyersInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type FlyerItemUpdateManyWithoutFlyerNestedInput = {
    create?: XOR<FlyerItemCreateWithoutFlyerInput, FlyerItemUncheckedCreateWithoutFlyerInput> | FlyerItemCreateWithoutFlyerInput[] | FlyerItemUncheckedCreateWithoutFlyerInput[]
    connectOrCreate?: FlyerItemCreateOrConnectWithoutFlyerInput | FlyerItemCreateOrConnectWithoutFlyerInput[]
    upsert?: FlyerItemUpsertWithWhereUniqueWithoutFlyerInput | FlyerItemUpsertWithWhereUniqueWithoutFlyerInput[]
    createMany?: FlyerItemCreateManyFlyerInputEnvelope
    set?: FlyerItemWhereUniqueInput | FlyerItemWhereUniqueInput[]
    disconnect?: FlyerItemWhereUniqueInput | FlyerItemWhereUniqueInput[]
    delete?: FlyerItemWhereUniqueInput | FlyerItemWhereUniqueInput[]
    connect?: FlyerItemWhereUniqueInput | FlyerItemWhereUniqueInput[]
    update?: FlyerItemUpdateWithWhereUniqueWithoutFlyerInput | FlyerItemUpdateWithWhereUniqueWithoutFlyerInput[]
    updateMany?: FlyerItemUpdateManyWithWhereWithoutFlyerInput | FlyerItemUpdateManyWithWhereWithoutFlyerInput[]
    deleteMany?: FlyerItemScalarWhereInput | FlyerItemScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutFlyersNestedInput = {
    create?: XOR<CategoryCreateWithoutFlyersInput, CategoryUncheckedCreateWithoutFlyersInput> | CategoryCreateWithoutFlyersInput[] | CategoryUncheckedCreateWithoutFlyersInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutFlyersInput | CategoryCreateOrConnectWithoutFlyersInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutFlyersInput | CategoryUpsertWithWhereUniqueWithoutFlyersInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutFlyersInput | CategoryUpdateWithWhereUniqueWithoutFlyersInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutFlyersInput | CategoryUpdateManyWithWhereWithoutFlyersInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutSavedFlyersNestedInput = {
    create?: XOR<UserCreateWithoutSavedFlyersInput, UserUncheckedCreateWithoutSavedFlyersInput> | UserCreateWithoutSavedFlyersInput[] | UserUncheckedCreateWithoutSavedFlyersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSavedFlyersInput | UserCreateOrConnectWithoutSavedFlyersInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSavedFlyersInput | UserUpsertWithWhereUniqueWithoutSavedFlyersInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSavedFlyersInput | UserUpdateWithWhereUniqueWithoutSavedFlyersInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSavedFlyersInput | UserUpdateManyWithWhereWithoutSavedFlyersInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type FlyerItemUncheckedUpdateManyWithoutFlyerNestedInput = {
    create?: XOR<FlyerItemCreateWithoutFlyerInput, FlyerItemUncheckedCreateWithoutFlyerInput> | FlyerItemCreateWithoutFlyerInput[] | FlyerItemUncheckedCreateWithoutFlyerInput[]
    connectOrCreate?: FlyerItemCreateOrConnectWithoutFlyerInput | FlyerItemCreateOrConnectWithoutFlyerInput[]
    upsert?: FlyerItemUpsertWithWhereUniqueWithoutFlyerInput | FlyerItemUpsertWithWhereUniqueWithoutFlyerInput[]
    createMany?: FlyerItemCreateManyFlyerInputEnvelope
    set?: FlyerItemWhereUniqueInput | FlyerItemWhereUniqueInput[]
    disconnect?: FlyerItemWhereUniqueInput | FlyerItemWhereUniqueInput[]
    delete?: FlyerItemWhereUniqueInput | FlyerItemWhereUniqueInput[]
    connect?: FlyerItemWhereUniqueInput | FlyerItemWhereUniqueInput[]
    update?: FlyerItemUpdateWithWhereUniqueWithoutFlyerInput | FlyerItemUpdateWithWhereUniqueWithoutFlyerInput[]
    updateMany?: FlyerItemUpdateManyWithWhereWithoutFlyerInput | FlyerItemUpdateManyWithWhereWithoutFlyerInput[]
    deleteMany?: FlyerItemScalarWhereInput | FlyerItemScalarWhereInput[]
  }

  export type FlyerCreateNestedOneWithoutItemsInput = {
    create?: XOR<FlyerCreateWithoutItemsInput, FlyerUncheckedCreateWithoutItemsInput>
    connectOrCreate?: FlyerCreateOrConnectWithoutItemsInput
    connect?: FlyerWhereUniqueInput
  }

  export type ShoppingListItemCreateNestedManyWithoutFlyerItemInput = {
    create?: XOR<ShoppingListItemCreateWithoutFlyerItemInput, ShoppingListItemUncheckedCreateWithoutFlyerItemInput> | ShoppingListItemCreateWithoutFlyerItemInput[] | ShoppingListItemUncheckedCreateWithoutFlyerItemInput[]
    connectOrCreate?: ShoppingListItemCreateOrConnectWithoutFlyerItemInput | ShoppingListItemCreateOrConnectWithoutFlyerItemInput[]
    createMany?: ShoppingListItemCreateManyFlyerItemInputEnvelope
    connect?: ShoppingListItemWhereUniqueInput | ShoppingListItemWhereUniqueInput[]
  }

  export type WishlistItemCreateNestedManyWithoutFlyerItemInput = {
    create?: XOR<WishlistItemCreateWithoutFlyerItemInput, WishlistItemUncheckedCreateWithoutFlyerItemInput> | WishlistItemCreateWithoutFlyerItemInput[] | WishlistItemUncheckedCreateWithoutFlyerItemInput[]
    connectOrCreate?: WishlistItemCreateOrConnectWithoutFlyerItemInput | WishlistItemCreateOrConnectWithoutFlyerItemInput[]
    createMany?: WishlistItemCreateManyFlyerItemInputEnvelope
    connect?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
  }

  export type ShoppingListItemUncheckedCreateNestedManyWithoutFlyerItemInput = {
    create?: XOR<ShoppingListItemCreateWithoutFlyerItemInput, ShoppingListItemUncheckedCreateWithoutFlyerItemInput> | ShoppingListItemCreateWithoutFlyerItemInput[] | ShoppingListItemUncheckedCreateWithoutFlyerItemInput[]
    connectOrCreate?: ShoppingListItemCreateOrConnectWithoutFlyerItemInput | ShoppingListItemCreateOrConnectWithoutFlyerItemInput[]
    createMany?: ShoppingListItemCreateManyFlyerItemInputEnvelope
    connect?: ShoppingListItemWhereUniqueInput | ShoppingListItemWhereUniqueInput[]
  }

  export type WishlistItemUncheckedCreateNestedManyWithoutFlyerItemInput = {
    create?: XOR<WishlistItemCreateWithoutFlyerItemInput, WishlistItemUncheckedCreateWithoutFlyerItemInput> | WishlistItemCreateWithoutFlyerItemInput[] | WishlistItemUncheckedCreateWithoutFlyerItemInput[]
    connectOrCreate?: WishlistItemCreateOrConnectWithoutFlyerItemInput | WishlistItemCreateOrConnectWithoutFlyerItemInput[]
    createMany?: WishlistItemCreateManyFlyerItemInputEnvelope
    connect?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FlyerUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<FlyerCreateWithoutItemsInput, FlyerUncheckedCreateWithoutItemsInput>
    connectOrCreate?: FlyerCreateOrConnectWithoutItemsInput
    upsert?: FlyerUpsertWithoutItemsInput
    connect?: FlyerWhereUniqueInput
    update?: XOR<XOR<FlyerUpdateToOneWithWhereWithoutItemsInput, FlyerUpdateWithoutItemsInput>, FlyerUncheckedUpdateWithoutItemsInput>
  }

  export type ShoppingListItemUpdateManyWithoutFlyerItemNestedInput = {
    create?: XOR<ShoppingListItemCreateWithoutFlyerItemInput, ShoppingListItemUncheckedCreateWithoutFlyerItemInput> | ShoppingListItemCreateWithoutFlyerItemInput[] | ShoppingListItemUncheckedCreateWithoutFlyerItemInput[]
    connectOrCreate?: ShoppingListItemCreateOrConnectWithoutFlyerItemInput | ShoppingListItemCreateOrConnectWithoutFlyerItemInput[]
    upsert?: ShoppingListItemUpsertWithWhereUniqueWithoutFlyerItemInput | ShoppingListItemUpsertWithWhereUniqueWithoutFlyerItemInput[]
    createMany?: ShoppingListItemCreateManyFlyerItemInputEnvelope
    set?: ShoppingListItemWhereUniqueInput | ShoppingListItemWhereUniqueInput[]
    disconnect?: ShoppingListItemWhereUniqueInput | ShoppingListItemWhereUniqueInput[]
    delete?: ShoppingListItemWhereUniqueInput | ShoppingListItemWhereUniqueInput[]
    connect?: ShoppingListItemWhereUniqueInput | ShoppingListItemWhereUniqueInput[]
    update?: ShoppingListItemUpdateWithWhereUniqueWithoutFlyerItemInput | ShoppingListItemUpdateWithWhereUniqueWithoutFlyerItemInput[]
    updateMany?: ShoppingListItemUpdateManyWithWhereWithoutFlyerItemInput | ShoppingListItemUpdateManyWithWhereWithoutFlyerItemInput[]
    deleteMany?: ShoppingListItemScalarWhereInput | ShoppingListItemScalarWhereInput[]
  }

  export type WishlistItemUpdateManyWithoutFlyerItemNestedInput = {
    create?: XOR<WishlistItemCreateWithoutFlyerItemInput, WishlistItemUncheckedCreateWithoutFlyerItemInput> | WishlistItemCreateWithoutFlyerItemInput[] | WishlistItemUncheckedCreateWithoutFlyerItemInput[]
    connectOrCreate?: WishlistItemCreateOrConnectWithoutFlyerItemInput | WishlistItemCreateOrConnectWithoutFlyerItemInput[]
    upsert?: WishlistItemUpsertWithWhereUniqueWithoutFlyerItemInput | WishlistItemUpsertWithWhereUniqueWithoutFlyerItemInput[]
    createMany?: WishlistItemCreateManyFlyerItemInputEnvelope
    set?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    disconnect?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    delete?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    connect?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    update?: WishlistItemUpdateWithWhereUniqueWithoutFlyerItemInput | WishlistItemUpdateWithWhereUniqueWithoutFlyerItemInput[]
    updateMany?: WishlistItemUpdateManyWithWhereWithoutFlyerItemInput | WishlistItemUpdateManyWithWhereWithoutFlyerItemInput[]
    deleteMany?: WishlistItemScalarWhereInput | WishlistItemScalarWhereInput[]
  }

  export type ShoppingListItemUncheckedUpdateManyWithoutFlyerItemNestedInput = {
    create?: XOR<ShoppingListItemCreateWithoutFlyerItemInput, ShoppingListItemUncheckedCreateWithoutFlyerItemInput> | ShoppingListItemCreateWithoutFlyerItemInput[] | ShoppingListItemUncheckedCreateWithoutFlyerItemInput[]
    connectOrCreate?: ShoppingListItemCreateOrConnectWithoutFlyerItemInput | ShoppingListItemCreateOrConnectWithoutFlyerItemInput[]
    upsert?: ShoppingListItemUpsertWithWhereUniqueWithoutFlyerItemInput | ShoppingListItemUpsertWithWhereUniqueWithoutFlyerItemInput[]
    createMany?: ShoppingListItemCreateManyFlyerItemInputEnvelope
    set?: ShoppingListItemWhereUniqueInput | ShoppingListItemWhereUniqueInput[]
    disconnect?: ShoppingListItemWhereUniqueInput | ShoppingListItemWhereUniqueInput[]
    delete?: ShoppingListItemWhereUniqueInput | ShoppingListItemWhereUniqueInput[]
    connect?: ShoppingListItemWhereUniqueInput | ShoppingListItemWhereUniqueInput[]
    update?: ShoppingListItemUpdateWithWhereUniqueWithoutFlyerItemInput | ShoppingListItemUpdateWithWhereUniqueWithoutFlyerItemInput[]
    updateMany?: ShoppingListItemUpdateManyWithWhereWithoutFlyerItemInput | ShoppingListItemUpdateManyWithWhereWithoutFlyerItemInput[]
    deleteMany?: ShoppingListItemScalarWhereInput | ShoppingListItemScalarWhereInput[]
  }

  export type WishlistItemUncheckedUpdateManyWithoutFlyerItemNestedInput = {
    create?: XOR<WishlistItemCreateWithoutFlyerItemInput, WishlistItemUncheckedCreateWithoutFlyerItemInput> | WishlistItemCreateWithoutFlyerItemInput[] | WishlistItemUncheckedCreateWithoutFlyerItemInput[]
    connectOrCreate?: WishlistItemCreateOrConnectWithoutFlyerItemInput | WishlistItemCreateOrConnectWithoutFlyerItemInput[]
    upsert?: WishlistItemUpsertWithWhereUniqueWithoutFlyerItemInput | WishlistItemUpsertWithWhereUniqueWithoutFlyerItemInput[]
    createMany?: WishlistItemCreateManyFlyerItemInputEnvelope
    set?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    disconnect?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    delete?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    connect?: WishlistItemWhereUniqueInput | WishlistItemWhereUniqueInput[]
    update?: WishlistItemUpdateWithWhereUniqueWithoutFlyerItemInput | WishlistItemUpdateWithWhereUniqueWithoutFlyerItemInput[]
    updateMany?: WishlistItemUpdateManyWithWhereWithoutFlyerItemInput | WishlistItemUpdateManyWithWhereWithoutFlyerItemInput[]
    deleteMany?: WishlistItemScalarWhereInput | WishlistItemScalarWhereInput[]
  }

  export type StoreCreateNestedOneWithoutCouponsInput = {
    create?: XOR<StoreCreateWithoutCouponsInput, StoreUncheckedCreateWithoutCouponsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutCouponsInput
    connect?: StoreWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutCouponsInput = {
    create?: XOR<CategoryCreateWithoutCouponsInput, CategoryUncheckedCreateWithoutCouponsInput> | CategoryCreateWithoutCouponsInput[] | CategoryUncheckedCreateWithoutCouponsInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutCouponsInput | CategoryCreateOrConnectWithoutCouponsInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutSavedCouponsInput = {
    create?: XOR<UserCreateWithoutSavedCouponsInput, UserUncheckedCreateWithoutSavedCouponsInput> | UserCreateWithoutSavedCouponsInput[] | UserUncheckedCreateWithoutSavedCouponsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSavedCouponsInput | UserCreateOrConnectWithoutSavedCouponsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutCouponsInput = {
    create?: XOR<CategoryCreateWithoutCouponsInput, CategoryUncheckedCreateWithoutCouponsInput> | CategoryCreateWithoutCouponsInput[] | CategoryUncheckedCreateWithoutCouponsInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutCouponsInput | CategoryCreateOrConnectWithoutCouponsInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutSavedCouponsInput = {
    create?: XOR<UserCreateWithoutSavedCouponsInput, UserUncheckedCreateWithoutSavedCouponsInput> | UserCreateWithoutSavedCouponsInput[] | UserUncheckedCreateWithoutSavedCouponsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSavedCouponsInput | UserCreateOrConnectWithoutSavedCouponsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StoreUpdateOneRequiredWithoutCouponsNestedInput = {
    create?: XOR<StoreCreateWithoutCouponsInput, StoreUncheckedCreateWithoutCouponsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutCouponsInput
    upsert?: StoreUpsertWithoutCouponsInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutCouponsInput, StoreUpdateWithoutCouponsInput>, StoreUncheckedUpdateWithoutCouponsInput>
  }

  export type CategoryUpdateManyWithoutCouponsNestedInput = {
    create?: XOR<CategoryCreateWithoutCouponsInput, CategoryUncheckedCreateWithoutCouponsInput> | CategoryCreateWithoutCouponsInput[] | CategoryUncheckedCreateWithoutCouponsInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutCouponsInput | CategoryCreateOrConnectWithoutCouponsInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutCouponsInput | CategoryUpsertWithWhereUniqueWithoutCouponsInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutCouponsInput | CategoryUpdateWithWhereUniqueWithoutCouponsInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutCouponsInput | CategoryUpdateManyWithWhereWithoutCouponsInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type UserUpdateManyWithoutSavedCouponsNestedInput = {
    create?: XOR<UserCreateWithoutSavedCouponsInput, UserUncheckedCreateWithoutSavedCouponsInput> | UserCreateWithoutSavedCouponsInput[] | UserUncheckedCreateWithoutSavedCouponsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSavedCouponsInput | UserCreateOrConnectWithoutSavedCouponsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSavedCouponsInput | UserUpsertWithWhereUniqueWithoutSavedCouponsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSavedCouponsInput | UserUpdateWithWhereUniqueWithoutSavedCouponsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSavedCouponsInput | UserUpdateManyWithWhereWithoutSavedCouponsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutCouponsNestedInput = {
    create?: XOR<CategoryCreateWithoutCouponsInput, CategoryUncheckedCreateWithoutCouponsInput> | CategoryCreateWithoutCouponsInput[] | CategoryUncheckedCreateWithoutCouponsInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutCouponsInput | CategoryCreateOrConnectWithoutCouponsInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutCouponsInput | CategoryUpsertWithWhereUniqueWithoutCouponsInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutCouponsInput | CategoryUpdateWithWhereUniqueWithoutCouponsInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutCouponsInput | CategoryUpdateManyWithWhereWithoutCouponsInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutSavedCouponsNestedInput = {
    create?: XOR<UserCreateWithoutSavedCouponsInput, UserUncheckedCreateWithoutSavedCouponsInput> | UserCreateWithoutSavedCouponsInput[] | UserUncheckedCreateWithoutSavedCouponsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSavedCouponsInput | UserCreateOrConnectWithoutSavedCouponsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSavedCouponsInput | UserUpsertWithWhereUniqueWithoutSavedCouponsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSavedCouponsInput | UserUpdateWithWhereUniqueWithoutSavedCouponsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSavedCouponsInput | UserUpdateManyWithWhereWithoutSavedCouponsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutShoppingListsInput = {
    create?: XOR<UserCreateWithoutShoppingListsInput, UserUncheckedCreateWithoutShoppingListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShoppingListsInput
    connect?: UserWhereUniqueInput
  }

  export type ShoppingListItemCreateNestedManyWithoutShoppingListInput = {
    create?: XOR<ShoppingListItemCreateWithoutShoppingListInput, ShoppingListItemUncheckedCreateWithoutShoppingListInput> | ShoppingListItemCreateWithoutShoppingListInput[] | ShoppingListItemUncheckedCreateWithoutShoppingListInput[]
    connectOrCreate?: ShoppingListItemCreateOrConnectWithoutShoppingListInput | ShoppingListItemCreateOrConnectWithoutShoppingListInput[]
    createMany?: ShoppingListItemCreateManyShoppingListInputEnvelope
    connect?: ShoppingListItemWhereUniqueInput | ShoppingListItemWhereUniqueInput[]
  }

  export type ShoppingListItemUncheckedCreateNestedManyWithoutShoppingListInput = {
    create?: XOR<ShoppingListItemCreateWithoutShoppingListInput, ShoppingListItemUncheckedCreateWithoutShoppingListInput> | ShoppingListItemCreateWithoutShoppingListInput[] | ShoppingListItemUncheckedCreateWithoutShoppingListInput[]
    connectOrCreate?: ShoppingListItemCreateOrConnectWithoutShoppingListInput | ShoppingListItemCreateOrConnectWithoutShoppingListInput[]
    createMany?: ShoppingListItemCreateManyShoppingListInputEnvelope
    connect?: ShoppingListItemWhereUniqueInput | ShoppingListItemWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutShoppingListsNestedInput = {
    create?: XOR<UserCreateWithoutShoppingListsInput, UserUncheckedCreateWithoutShoppingListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShoppingListsInput
    upsert?: UserUpsertWithoutShoppingListsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShoppingListsInput, UserUpdateWithoutShoppingListsInput>, UserUncheckedUpdateWithoutShoppingListsInput>
  }

  export type ShoppingListItemUpdateManyWithoutShoppingListNestedInput = {
    create?: XOR<ShoppingListItemCreateWithoutShoppingListInput, ShoppingListItemUncheckedCreateWithoutShoppingListInput> | ShoppingListItemCreateWithoutShoppingListInput[] | ShoppingListItemUncheckedCreateWithoutShoppingListInput[]
    connectOrCreate?: ShoppingListItemCreateOrConnectWithoutShoppingListInput | ShoppingListItemCreateOrConnectWithoutShoppingListInput[]
    upsert?: ShoppingListItemUpsertWithWhereUniqueWithoutShoppingListInput | ShoppingListItemUpsertWithWhereUniqueWithoutShoppingListInput[]
    createMany?: ShoppingListItemCreateManyShoppingListInputEnvelope
    set?: ShoppingListItemWhereUniqueInput | ShoppingListItemWhereUniqueInput[]
    disconnect?: ShoppingListItemWhereUniqueInput | ShoppingListItemWhereUniqueInput[]
    delete?: ShoppingListItemWhereUniqueInput | ShoppingListItemWhereUniqueInput[]
    connect?: ShoppingListItemWhereUniqueInput | ShoppingListItemWhereUniqueInput[]
    update?: ShoppingListItemUpdateWithWhereUniqueWithoutShoppingListInput | ShoppingListItemUpdateWithWhereUniqueWithoutShoppingListInput[]
    updateMany?: ShoppingListItemUpdateManyWithWhereWithoutShoppingListInput | ShoppingListItemUpdateManyWithWhereWithoutShoppingListInput[]
    deleteMany?: ShoppingListItemScalarWhereInput | ShoppingListItemScalarWhereInput[]
  }

  export type ShoppingListItemUncheckedUpdateManyWithoutShoppingListNestedInput = {
    create?: XOR<ShoppingListItemCreateWithoutShoppingListInput, ShoppingListItemUncheckedCreateWithoutShoppingListInput> | ShoppingListItemCreateWithoutShoppingListInput[] | ShoppingListItemUncheckedCreateWithoutShoppingListInput[]
    connectOrCreate?: ShoppingListItemCreateOrConnectWithoutShoppingListInput | ShoppingListItemCreateOrConnectWithoutShoppingListInput[]
    upsert?: ShoppingListItemUpsertWithWhereUniqueWithoutShoppingListInput | ShoppingListItemUpsertWithWhereUniqueWithoutShoppingListInput[]
    createMany?: ShoppingListItemCreateManyShoppingListInputEnvelope
    set?: ShoppingListItemWhereUniqueInput | ShoppingListItemWhereUniqueInput[]
    disconnect?: ShoppingListItemWhereUniqueInput | ShoppingListItemWhereUniqueInput[]
    delete?: ShoppingListItemWhereUniqueInput | ShoppingListItemWhereUniqueInput[]
    connect?: ShoppingListItemWhereUniqueInput | ShoppingListItemWhereUniqueInput[]
    update?: ShoppingListItemUpdateWithWhereUniqueWithoutShoppingListInput | ShoppingListItemUpdateWithWhereUniqueWithoutShoppingListInput[]
    updateMany?: ShoppingListItemUpdateManyWithWhereWithoutShoppingListInput | ShoppingListItemUpdateManyWithWhereWithoutShoppingListInput[]
    deleteMany?: ShoppingListItemScalarWhereInput | ShoppingListItemScalarWhereInput[]
  }

  export type ShoppingListCreateNestedOneWithoutItemsInput = {
    create?: XOR<ShoppingListCreateWithoutItemsInput, ShoppingListUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ShoppingListCreateOrConnectWithoutItemsInput
    connect?: ShoppingListWhereUniqueInput
  }

  export type FlyerItemCreateNestedOneWithoutShoppingListItemsInput = {
    create?: XOR<FlyerItemCreateWithoutShoppingListItemsInput, FlyerItemUncheckedCreateWithoutShoppingListItemsInput>
    connectOrCreate?: FlyerItemCreateOrConnectWithoutShoppingListItemsInput
    connect?: FlyerItemWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ShoppingListUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ShoppingListCreateWithoutItemsInput, ShoppingListUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ShoppingListCreateOrConnectWithoutItemsInput
    upsert?: ShoppingListUpsertWithoutItemsInput
    connect?: ShoppingListWhereUniqueInput
    update?: XOR<XOR<ShoppingListUpdateToOneWithWhereWithoutItemsInput, ShoppingListUpdateWithoutItemsInput>, ShoppingListUncheckedUpdateWithoutItemsInput>
  }

  export type FlyerItemUpdateOneWithoutShoppingListItemsNestedInput = {
    create?: XOR<FlyerItemCreateWithoutShoppingListItemsInput, FlyerItemUncheckedCreateWithoutShoppingListItemsInput>
    connectOrCreate?: FlyerItemCreateOrConnectWithoutShoppingListItemsInput
    upsert?: FlyerItemUpsertWithoutShoppingListItemsInput
    disconnect?: FlyerItemWhereInput | boolean
    delete?: FlyerItemWhereInput | boolean
    connect?: FlyerItemWhereUniqueInput
    update?: XOR<XOR<FlyerItemUpdateToOneWithWhereWithoutShoppingListItemsInput, FlyerItemUpdateWithoutShoppingListItemsInput>, FlyerItemUncheckedUpdateWithoutShoppingListItemsInput>
  }

  export type UserCreateNestedOneWithoutWishlistInput = {
    create?: XOR<UserCreateWithoutWishlistInput, UserUncheckedCreateWithoutWishlistInput>
    connectOrCreate?: UserCreateOrConnectWithoutWishlistInput
    connect?: UserWhereUniqueInput
  }

  export type FlyerItemCreateNestedOneWithoutWishlistItemsInput = {
    create?: XOR<FlyerItemCreateWithoutWishlistItemsInput, FlyerItemUncheckedCreateWithoutWishlistItemsInput>
    connectOrCreate?: FlyerItemCreateOrConnectWithoutWishlistItemsInput
    connect?: FlyerItemWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWishlistNestedInput = {
    create?: XOR<UserCreateWithoutWishlistInput, UserUncheckedCreateWithoutWishlistInput>
    connectOrCreate?: UserCreateOrConnectWithoutWishlistInput
    upsert?: UserUpsertWithoutWishlistInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWishlistInput, UserUpdateWithoutWishlistInput>, UserUncheckedUpdateWithoutWishlistInput>
  }

  export type FlyerItemUpdateOneWithoutWishlistItemsNestedInput = {
    create?: XOR<FlyerItemCreateWithoutWishlistItemsInput, FlyerItemUncheckedCreateWithoutWishlistItemsInput>
    connectOrCreate?: FlyerItemCreateOrConnectWithoutWishlistItemsInput
    upsert?: FlyerItemUpsertWithoutWishlistItemsInput
    disconnect?: FlyerItemWhereInput | boolean
    delete?: FlyerItemWhereInput | boolean
    connect?: FlyerItemWhereUniqueInput
    update?: XOR<XOR<FlyerItemUpdateToOneWithWhereWithoutWishlistItemsInput, FlyerItemUpdateWithoutWishlistItemsInput>, FlyerItemUncheckedUpdateWithoutWishlistItemsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StoreCreateWithoutFavoredByInput = {
    id?: string
    name: string
    logo?: string | null
    description?: string | null
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flyers?: FlyerCreateNestedManyWithoutStoreInput
    coupons?: CouponCreateNestedManyWithoutStoreInput
    categories?: CategoryCreateNestedManyWithoutStoresInput
  }

  export type StoreUncheckedCreateWithoutFavoredByInput = {
    id?: string
    name: string
    logo?: string | null
    description?: string | null
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flyers?: FlyerUncheckedCreateNestedManyWithoutStoreInput
    coupons?: CouponUncheckedCreateNestedManyWithoutStoreInput
    categories?: CategoryUncheckedCreateNestedManyWithoutStoresInput
  }

  export type StoreCreateOrConnectWithoutFavoredByInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutFavoredByInput, StoreUncheckedCreateWithoutFavoredByInput>
  }

  export type CategoryCreateWithoutPreferredByInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flyers?: FlyerCreateNestedManyWithoutCategoriesInput
    coupons?: CouponCreateNestedManyWithoutCategoriesInput
    stores?: StoreCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutPreferredByInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flyers?: FlyerUncheckedCreateNestedManyWithoutCategoriesInput
    coupons?: CouponUncheckedCreateNestedManyWithoutCategoriesInput
    stores?: StoreUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryCreateOrConnectWithoutPreferredByInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutPreferredByInput, CategoryUncheckedCreateWithoutPreferredByInput>
  }

  export type FlyerCreateWithoutSavedByInput = {
    id?: string
    title: string
    imageUrl: string
    startDate: Date | string
    endDate: Date | string
    isSponsored?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutFlyersInput
    categories?: CategoryCreateNestedManyWithoutFlyersInput
    items?: FlyerItemCreateNestedManyWithoutFlyerInput
  }

  export type FlyerUncheckedCreateWithoutSavedByInput = {
    id?: string
    title: string
    storeId: string
    imageUrl: string
    startDate: Date | string
    endDate: Date | string
    isSponsored?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutFlyersInput
    items?: FlyerItemUncheckedCreateNestedManyWithoutFlyerInput
  }

  export type FlyerCreateOrConnectWithoutSavedByInput = {
    where: FlyerWhereUniqueInput
    create: XOR<FlyerCreateWithoutSavedByInput, FlyerUncheckedCreateWithoutSavedByInput>
  }

  export type CouponCreateWithoutSavedByInput = {
    id?: string
    title: string
    code?: string | null
    barcodeUrl?: string | null
    qrCodeUrl?: string | null
    discount: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    isOnline?: boolean
    isInStore?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutCouponsInput
    categories?: CategoryCreateNestedManyWithoutCouponsInput
  }

  export type CouponUncheckedCreateWithoutSavedByInput = {
    id?: string
    title: string
    storeId: string
    code?: string | null
    barcodeUrl?: string | null
    qrCodeUrl?: string | null
    discount: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    isOnline?: boolean
    isInStore?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutCouponsInput
  }

  export type CouponCreateOrConnectWithoutSavedByInput = {
    where: CouponWhereUniqueInput
    create: XOR<CouponCreateWithoutSavedByInput, CouponUncheckedCreateWithoutSavedByInput>
  }

  export type ShoppingListCreateWithoutUserInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ShoppingListItemCreateNestedManyWithoutShoppingListInput
  }

  export type ShoppingListUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ShoppingListItemUncheckedCreateNestedManyWithoutShoppingListInput
  }

  export type ShoppingListCreateOrConnectWithoutUserInput = {
    where: ShoppingListWhereUniqueInput
    create: XOR<ShoppingListCreateWithoutUserInput, ShoppingListUncheckedCreateWithoutUserInput>
  }

  export type ShoppingListCreateManyUserInputEnvelope = {
    data: ShoppingListCreateManyUserInput | ShoppingListCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WishlistItemCreateWithoutUserInput = {
    id?: string
    name: string
    targetPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flyerItem?: FlyerItemCreateNestedOneWithoutWishlistItemsInput
  }

  export type WishlistItemUncheckedCreateWithoutUserInput = {
    id?: string
    flyerItemId?: string | null
    name: string
    targetPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WishlistItemCreateOrConnectWithoutUserInput = {
    where: WishlistItemWhereUniqueInput
    create: XOR<WishlistItemCreateWithoutUserInput, WishlistItemUncheckedCreateWithoutUserInput>
  }

  export type WishlistItemCreateManyUserInputEnvelope = {
    data: WishlistItemCreateManyUserInput | WishlistItemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StoreUpsertWithWhereUniqueWithoutFavoredByInput = {
    where: StoreWhereUniqueInput
    update: XOR<StoreUpdateWithoutFavoredByInput, StoreUncheckedUpdateWithoutFavoredByInput>
    create: XOR<StoreCreateWithoutFavoredByInput, StoreUncheckedCreateWithoutFavoredByInput>
  }

  export type StoreUpdateWithWhereUniqueWithoutFavoredByInput = {
    where: StoreWhereUniqueInput
    data: XOR<StoreUpdateWithoutFavoredByInput, StoreUncheckedUpdateWithoutFavoredByInput>
  }

  export type StoreUpdateManyWithWhereWithoutFavoredByInput = {
    where: StoreScalarWhereInput
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyWithoutFavoredByInput>
  }

  export type StoreScalarWhereInput = {
    AND?: StoreScalarWhereInput | StoreScalarWhereInput[]
    OR?: StoreScalarWhereInput[]
    NOT?: StoreScalarWhereInput | StoreScalarWhereInput[]
    id?: StringFilter<"Store"> | string
    name?: StringFilter<"Store"> | string
    logo?: StringNullableFilter<"Store"> | string | null
    description?: StringNullableFilter<"Store"> | string | null
    address?: StringNullableFilter<"Store"> | string | null
    latitude?: FloatNullableFilter<"Store"> | number | null
    longitude?: FloatNullableFilter<"Store"> | number | null
    createdAt?: DateTimeFilter<"Store"> | Date | string
    updatedAt?: DateTimeFilter<"Store"> | Date | string
  }

  export type CategoryUpsertWithWhereUniqueWithoutPreferredByInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutPreferredByInput, CategoryUncheckedUpdateWithoutPreferredByInput>
    create: XOR<CategoryCreateWithoutPreferredByInput, CategoryUncheckedCreateWithoutPreferredByInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutPreferredByInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutPreferredByInput, CategoryUncheckedUpdateWithoutPreferredByInput>
  }

  export type CategoryUpdateManyWithWhereWithoutPreferredByInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutPreferredByInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
  }

  export type FlyerUpsertWithWhereUniqueWithoutSavedByInput = {
    where: FlyerWhereUniqueInput
    update: XOR<FlyerUpdateWithoutSavedByInput, FlyerUncheckedUpdateWithoutSavedByInput>
    create: XOR<FlyerCreateWithoutSavedByInput, FlyerUncheckedCreateWithoutSavedByInput>
  }

  export type FlyerUpdateWithWhereUniqueWithoutSavedByInput = {
    where: FlyerWhereUniqueInput
    data: XOR<FlyerUpdateWithoutSavedByInput, FlyerUncheckedUpdateWithoutSavedByInput>
  }

  export type FlyerUpdateManyWithWhereWithoutSavedByInput = {
    where: FlyerScalarWhereInput
    data: XOR<FlyerUpdateManyMutationInput, FlyerUncheckedUpdateManyWithoutSavedByInput>
  }

  export type FlyerScalarWhereInput = {
    AND?: FlyerScalarWhereInput | FlyerScalarWhereInput[]
    OR?: FlyerScalarWhereInput[]
    NOT?: FlyerScalarWhereInput | FlyerScalarWhereInput[]
    id?: StringFilter<"Flyer"> | string
    title?: StringFilter<"Flyer"> | string
    storeId?: StringFilter<"Flyer"> | string
    imageUrl?: StringFilter<"Flyer"> | string
    startDate?: DateTimeFilter<"Flyer"> | Date | string
    endDate?: DateTimeFilter<"Flyer"> | Date | string
    isSponsored?: BoolFilter<"Flyer"> | boolean
    createdAt?: DateTimeFilter<"Flyer"> | Date | string
    updatedAt?: DateTimeFilter<"Flyer"> | Date | string
  }

  export type CouponUpsertWithWhereUniqueWithoutSavedByInput = {
    where: CouponWhereUniqueInput
    update: XOR<CouponUpdateWithoutSavedByInput, CouponUncheckedUpdateWithoutSavedByInput>
    create: XOR<CouponCreateWithoutSavedByInput, CouponUncheckedCreateWithoutSavedByInput>
  }

  export type CouponUpdateWithWhereUniqueWithoutSavedByInput = {
    where: CouponWhereUniqueInput
    data: XOR<CouponUpdateWithoutSavedByInput, CouponUncheckedUpdateWithoutSavedByInput>
  }

  export type CouponUpdateManyWithWhereWithoutSavedByInput = {
    where: CouponScalarWhereInput
    data: XOR<CouponUpdateManyMutationInput, CouponUncheckedUpdateManyWithoutSavedByInput>
  }

  export type CouponScalarWhereInput = {
    AND?: CouponScalarWhereInput | CouponScalarWhereInput[]
    OR?: CouponScalarWhereInput[]
    NOT?: CouponScalarWhereInput | CouponScalarWhereInput[]
    id?: StringFilter<"Coupon"> | string
    title?: StringFilter<"Coupon"> | string
    storeId?: StringFilter<"Coupon"> | string
    code?: StringNullableFilter<"Coupon"> | string | null
    barcodeUrl?: StringNullableFilter<"Coupon"> | string | null
    qrCodeUrl?: StringNullableFilter<"Coupon"> | string | null
    discount?: StringFilter<"Coupon"> | string
    description?: StringNullableFilter<"Coupon"> | string | null
    startDate?: DateTimeFilter<"Coupon"> | Date | string
    endDate?: DateTimeFilter<"Coupon"> | Date | string
    isOnline?: BoolFilter<"Coupon"> | boolean
    isInStore?: BoolFilter<"Coupon"> | boolean
    createdAt?: DateTimeFilter<"Coupon"> | Date | string
    updatedAt?: DateTimeFilter<"Coupon"> | Date | string
  }

  export type ShoppingListUpsertWithWhereUniqueWithoutUserInput = {
    where: ShoppingListWhereUniqueInput
    update: XOR<ShoppingListUpdateWithoutUserInput, ShoppingListUncheckedUpdateWithoutUserInput>
    create: XOR<ShoppingListCreateWithoutUserInput, ShoppingListUncheckedCreateWithoutUserInput>
  }

  export type ShoppingListUpdateWithWhereUniqueWithoutUserInput = {
    where: ShoppingListWhereUniqueInput
    data: XOR<ShoppingListUpdateWithoutUserInput, ShoppingListUncheckedUpdateWithoutUserInput>
  }

  export type ShoppingListUpdateManyWithWhereWithoutUserInput = {
    where: ShoppingListScalarWhereInput
    data: XOR<ShoppingListUpdateManyMutationInput, ShoppingListUncheckedUpdateManyWithoutUserInput>
  }

  export type ShoppingListScalarWhereInput = {
    AND?: ShoppingListScalarWhereInput | ShoppingListScalarWhereInput[]
    OR?: ShoppingListScalarWhereInput[]
    NOT?: ShoppingListScalarWhereInput | ShoppingListScalarWhereInput[]
    id?: StringFilter<"ShoppingList"> | string
    title?: StringFilter<"ShoppingList"> | string
    userId?: StringFilter<"ShoppingList"> | string
    createdAt?: DateTimeFilter<"ShoppingList"> | Date | string
    updatedAt?: DateTimeFilter<"ShoppingList"> | Date | string
  }

  export type WishlistItemUpsertWithWhereUniqueWithoutUserInput = {
    where: WishlistItemWhereUniqueInput
    update: XOR<WishlistItemUpdateWithoutUserInput, WishlistItemUncheckedUpdateWithoutUserInput>
    create: XOR<WishlistItemCreateWithoutUserInput, WishlistItemUncheckedCreateWithoutUserInput>
  }

  export type WishlistItemUpdateWithWhereUniqueWithoutUserInput = {
    where: WishlistItemWhereUniqueInput
    data: XOR<WishlistItemUpdateWithoutUserInput, WishlistItemUncheckedUpdateWithoutUserInput>
  }

  export type WishlistItemUpdateManyWithWhereWithoutUserInput = {
    where: WishlistItemScalarWhereInput
    data: XOR<WishlistItemUpdateManyMutationInput, WishlistItemUncheckedUpdateManyWithoutUserInput>
  }

  export type WishlistItemScalarWhereInput = {
    AND?: WishlistItemScalarWhereInput | WishlistItemScalarWhereInput[]
    OR?: WishlistItemScalarWhereInput[]
    NOT?: WishlistItemScalarWhereInput | WishlistItemScalarWhereInput[]
    id?: StringFilter<"WishlistItem"> | string
    userId?: StringFilter<"WishlistItem"> | string
    flyerItemId?: StringNullableFilter<"WishlistItem"> | string | null
    name?: StringFilter<"WishlistItem"> | string
    targetPrice?: FloatNullableFilter<"WishlistItem"> | number | null
    createdAt?: DateTimeFilter<"WishlistItem"> | Date | string
    updatedAt?: DateTimeFilter<"WishlistItem"> | Date | string
  }

  export type FlyerCreateWithoutStoreInput = {
    id?: string
    title: string
    imageUrl: string
    startDate: Date | string
    endDate: Date | string
    isSponsored?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutFlyersInput
    savedBy?: UserCreateNestedManyWithoutSavedFlyersInput
    items?: FlyerItemCreateNestedManyWithoutFlyerInput
  }

  export type FlyerUncheckedCreateWithoutStoreInput = {
    id?: string
    title: string
    imageUrl: string
    startDate: Date | string
    endDate: Date | string
    isSponsored?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutFlyersInput
    savedBy?: UserUncheckedCreateNestedManyWithoutSavedFlyersInput
    items?: FlyerItemUncheckedCreateNestedManyWithoutFlyerInput
  }

  export type FlyerCreateOrConnectWithoutStoreInput = {
    where: FlyerWhereUniqueInput
    create: XOR<FlyerCreateWithoutStoreInput, FlyerUncheckedCreateWithoutStoreInput>
  }

  export type FlyerCreateManyStoreInputEnvelope = {
    data: FlyerCreateManyStoreInput | FlyerCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type CouponCreateWithoutStoreInput = {
    id?: string
    title: string
    code?: string | null
    barcodeUrl?: string | null
    qrCodeUrl?: string | null
    discount: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    isOnline?: boolean
    isInStore?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutCouponsInput
    savedBy?: UserCreateNestedManyWithoutSavedCouponsInput
  }

  export type CouponUncheckedCreateWithoutStoreInput = {
    id?: string
    title: string
    code?: string | null
    barcodeUrl?: string | null
    qrCodeUrl?: string | null
    discount: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    isOnline?: boolean
    isInStore?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutCouponsInput
    savedBy?: UserUncheckedCreateNestedManyWithoutSavedCouponsInput
  }

  export type CouponCreateOrConnectWithoutStoreInput = {
    where: CouponWhereUniqueInput
    create: XOR<CouponCreateWithoutStoreInput, CouponUncheckedCreateWithoutStoreInput>
  }

  export type CouponCreateManyStoreInputEnvelope = {
    data: CouponCreateManyStoreInput | CouponCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPreferredStoresInput = {
    id?: string
    email: string
    phone?: string | null
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: string | null
    preferredCategories?: CategoryCreateNestedManyWithoutPreferredByInput
    savedFlyers?: FlyerCreateNestedManyWithoutSavedByInput
    savedCoupons?: CouponCreateNestedManyWithoutSavedByInput
    shoppingLists?: ShoppingListCreateNestedManyWithoutUserInput
    wishlist?: WishlistItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPreferredStoresInput = {
    id?: string
    email: string
    phone?: string | null
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: string | null
    preferredCategories?: CategoryUncheckedCreateNestedManyWithoutPreferredByInput
    savedFlyers?: FlyerUncheckedCreateNestedManyWithoutSavedByInput
    savedCoupons?: CouponUncheckedCreateNestedManyWithoutSavedByInput
    shoppingLists?: ShoppingListUncheckedCreateNestedManyWithoutUserInput
    wishlist?: WishlistItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPreferredStoresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPreferredStoresInput, UserUncheckedCreateWithoutPreferredStoresInput>
  }

  export type CategoryCreateWithoutStoresInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flyers?: FlyerCreateNestedManyWithoutCategoriesInput
    coupons?: CouponCreateNestedManyWithoutCategoriesInput
    preferredBy?: UserCreateNestedManyWithoutPreferredCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutStoresInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flyers?: FlyerUncheckedCreateNestedManyWithoutCategoriesInput
    coupons?: CouponUncheckedCreateNestedManyWithoutCategoriesInput
    preferredBy?: UserUncheckedCreateNestedManyWithoutPreferredCategoriesInput
  }

  export type CategoryCreateOrConnectWithoutStoresInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutStoresInput, CategoryUncheckedCreateWithoutStoresInput>
  }

  export type FlyerUpsertWithWhereUniqueWithoutStoreInput = {
    where: FlyerWhereUniqueInput
    update: XOR<FlyerUpdateWithoutStoreInput, FlyerUncheckedUpdateWithoutStoreInput>
    create: XOR<FlyerCreateWithoutStoreInput, FlyerUncheckedCreateWithoutStoreInput>
  }

  export type FlyerUpdateWithWhereUniqueWithoutStoreInput = {
    where: FlyerWhereUniqueInput
    data: XOR<FlyerUpdateWithoutStoreInput, FlyerUncheckedUpdateWithoutStoreInput>
  }

  export type FlyerUpdateManyWithWhereWithoutStoreInput = {
    where: FlyerScalarWhereInput
    data: XOR<FlyerUpdateManyMutationInput, FlyerUncheckedUpdateManyWithoutStoreInput>
  }

  export type CouponUpsertWithWhereUniqueWithoutStoreInput = {
    where: CouponWhereUniqueInput
    update: XOR<CouponUpdateWithoutStoreInput, CouponUncheckedUpdateWithoutStoreInput>
    create: XOR<CouponCreateWithoutStoreInput, CouponUncheckedCreateWithoutStoreInput>
  }

  export type CouponUpdateWithWhereUniqueWithoutStoreInput = {
    where: CouponWhereUniqueInput
    data: XOR<CouponUpdateWithoutStoreInput, CouponUncheckedUpdateWithoutStoreInput>
  }

  export type CouponUpdateManyWithWhereWithoutStoreInput = {
    where: CouponScalarWhereInput
    data: XOR<CouponUpdateManyMutationInput, CouponUncheckedUpdateManyWithoutStoreInput>
  }

  export type UserUpsertWithWhereUniqueWithoutPreferredStoresInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutPreferredStoresInput, UserUncheckedUpdateWithoutPreferredStoresInput>
    create: XOR<UserCreateWithoutPreferredStoresInput, UserUncheckedCreateWithoutPreferredStoresInput>
  }

  export type UserUpdateWithWhereUniqueWithoutPreferredStoresInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutPreferredStoresInput, UserUncheckedUpdateWithoutPreferredStoresInput>
  }

  export type UserUpdateManyWithWhereWithoutPreferredStoresInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutPreferredStoresInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    location?: StringNullableFilter<"User"> | string | null
  }

  export type CategoryUpsertWithWhereUniqueWithoutStoresInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutStoresInput, CategoryUncheckedUpdateWithoutStoresInput>
    create: XOR<CategoryCreateWithoutStoresInput, CategoryUncheckedCreateWithoutStoresInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutStoresInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutStoresInput, CategoryUncheckedUpdateWithoutStoresInput>
  }

  export type CategoryUpdateManyWithWhereWithoutStoresInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutStoresInput>
  }

  export type FlyerCreateWithoutCategoriesInput = {
    id?: string
    title: string
    imageUrl: string
    startDate: Date | string
    endDate: Date | string
    isSponsored?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutFlyersInput
    savedBy?: UserCreateNestedManyWithoutSavedFlyersInput
    items?: FlyerItemCreateNestedManyWithoutFlyerInput
  }

  export type FlyerUncheckedCreateWithoutCategoriesInput = {
    id?: string
    title: string
    storeId: string
    imageUrl: string
    startDate: Date | string
    endDate: Date | string
    isSponsored?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    savedBy?: UserUncheckedCreateNestedManyWithoutSavedFlyersInput
    items?: FlyerItemUncheckedCreateNestedManyWithoutFlyerInput
  }

  export type FlyerCreateOrConnectWithoutCategoriesInput = {
    where: FlyerWhereUniqueInput
    create: XOR<FlyerCreateWithoutCategoriesInput, FlyerUncheckedCreateWithoutCategoriesInput>
  }

  export type CouponCreateWithoutCategoriesInput = {
    id?: string
    title: string
    code?: string | null
    barcodeUrl?: string | null
    qrCodeUrl?: string | null
    discount: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    isOnline?: boolean
    isInStore?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutCouponsInput
    savedBy?: UserCreateNestedManyWithoutSavedCouponsInput
  }

  export type CouponUncheckedCreateWithoutCategoriesInput = {
    id?: string
    title: string
    storeId: string
    code?: string | null
    barcodeUrl?: string | null
    qrCodeUrl?: string | null
    discount: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    isOnline?: boolean
    isInStore?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    savedBy?: UserUncheckedCreateNestedManyWithoutSavedCouponsInput
  }

  export type CouponCreateOrConnectWithoutCategoriesInput = {
    where: CouponWhereUniqueInput
    create: XOR<CouponCreateWithoutCategoriesInput, CouponUncheckedCreateWithoutCategoriesInput>
  }

  export type StoreCreateWithoutCategoriesInput = {
    id?: string
    name: string
    logo?: string | null
    description?: string | null
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flyers?: FlyerCreateNestedManyWithoutStoreInput
    coupons?: CouponCreateNestedManyWithoutStoreInput
    favoredBy?: UserCreateNestedManyWithoutPreferredStoresInput
  }

  export type StoreUncheckedCreateWithoutCategoriesInput = {
    id?: string
    name: string
    logo?: string | null
    description?: string | null
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flyers?: FlyerUncheckedCreateNestedManyWithoutStoreInput
    coupons?: CouponUncheckedCreateNestedManyWithoutStoreInput
    favoredBy?: UserUncheckedCreateNestedManyWithoutPreferredStoresInput
  }

  export type StoreCreateOrConnectWithoutCategoriesInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutCategoriesInput, StoreUncheckedCreateWithoutCategoriesInput>
  }

  export type UserCreateWithoutPreferredCategoriesInput = {
    id?: string
    email: string
    phone?: string | null
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: string | null
    preferredStores?: StoreCreateNestedManyWithoutFavoredByInput
    savedFlyers?: FlyerCreateNestedManyWithoutSavedByInput
    savedCoupons?: CouponCreateNestedManyWithoutSavedByInput
    shoppingLists?: ShoppingListCreateNestedManyWithoutUserInput
    wishlist?: WishlistItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPreferredCategoriesInput = {
    id?: string
    email: string
    phone?: string | null
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: string | null
    preferredStores?: StoreUncheckedCreateNestedManyWithoutFavoredByInput
    savedFlyers?: FlyerUncheckedCreateNestedManyWithoutSavedByInput
    savedCoupons?: CouponUncheckedCreateNestedManyWithoutSavedByInput
    shoppingLists?: ShoppingListUncheckedCreateNestedManyWithoutUserInput
    wishlist?: WishlistItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPreferredCategoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPreferredCategoriesInput, UserUncheckedCreateWithoutPreferredCategoriesInput>
  }

  export type FlyerUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: FlyerWhereUniqueInput
    update: XOR<FlyerUpdateWithoutCategoriesInput, FlyerUncheckedUpdateWithoutCategoriesInput>
    create: XOR<FlyerCreateWithoutCategoriesInput, FlyerUncheckedCreateWithoutCategoriesInput>
  }

  export type FlyerUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: FlyerWhereUniqueInput
    data: XOR<FlyerUpdateWithoutCategoriesInput, FlyerUncheckedUpdateWithoutCategoriesInput>
  }

  export type FlyerUpdateManyWithWhereWithoutCategoriesInput = {
    where: FlyerScalarWhereInput
    data: XOR<FlyerUpdateManyMutationInput, FlyerUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type CouponUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: CouponWhereUniqueInput
    update: XOR<CouponUpdateWithoutCategoriesInput, CouponUncheckedUpdateWithoutCategoriesInput>
    create: XOR<CouponCreateWithoutCategoriesInput, CouponUncheckedCreateWithoutCategoriesInput>
  }

  export type CouponUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: CouponWhereUniqueInput
    data: XOR<CouponUpdateWithoutCategoriesInput, CouponUncheckedUpdateWithoutCategoriesInput>
  }

  export type CouponUpdateManyWithWhereWithoutCategoriesInput = {
    where: CouponScalarWhereInput
    data: XOR<CouponUpdateManyMutationInput, CouponUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type StoreUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: StoreWhereUniqueInput
    update: XOR<StoreUpdateWithoutCategoriesInput, StoreUncheckedUpdateWithoutCategoriesInput>
    create: XOR<StoreCreateWithoutCategoriesInput, StoreUncheckedCreateWithoutCategoriesInput>
  }

  export type StoreUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: StoreWhereUniqueInput
    data: XOR<StoreUpdateWithoutCategoriesInput, StoreUncheckedUpdateWithoutCategoriesInput>
  }

  export type StoreUpdateManyWithWhereWithoutCategoriesInput = {
    where: StoreScalarWhereInput
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type UserUpsertWithWhereUniqueWithoutPreferredCategoriesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutPreferredCategoriesInput, UserUncheckedUpdateWithoutPreferredCategoriesInput>
    create: XOR<UserCreateWithoutPreferredCategoriesInput, UserUncheckedCreateWithoutPreferredCategoriesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutPreferredCategoriesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutPreferredCategoriesInput, UserUncheckedUpdateWithoutPreferredCategoriesInput>
  }

  export type UserUpdateManyWithWhereWithoutPreferredCategoriesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutPreferredCategoriesInput>
  }

  export type StoreCreateWithoutFlyersInput = {
    id?: string
    name: string
    logo?: string | null
    description?: string | null
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coupons?: CouponCreateNestedManyWithoutStoreInput
    favoredBy?: UserCreateNestedManyWithoutPreferredStoresInput
    categories?: CategoryCreateNestedManyWithoutStoresInput
  }

  export type StoreUncheckedCreateWithoutFlyersInput = {
    id?: string
    name: string
    logo?: string | null
    description?: string | null
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coupons?: CouponUncheckedCreateNestedManyWithoutStoreInput
    favoredBy?: UserUncheckedCreateNestedManyWithoutPreferredStoresInput
    categories?: CategoryUncheckedCreateNestedManyWithoutStoresInput
  }

  export type StoreCreateOrConnectWithoutFlyersInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutFlyersInput, StoreUncheckedCreateWithoutFlyersInput>
  }

  export type CategoryCreateWithoutFlyersInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coupons?: CouponCreateNestedManyWithoutCategoriesInput
    stores?: StoreCreateNestedManyWithoutCategoriesInput
    preferredBy?: UserCreateNestedManyWithoutPreferredCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutFlyersInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coupons?: CouponUncheckedCreateNestedManyWithoutCategoriesInput
    stores?: StoreUncheckedCreateNestedManyWithoutCategoriesInput
    preferredBy?: UserUncheckedCreateNestedManyWithoutPreferredCategoriesInput
  }

  export type CategoryCreateOrConnectWithoutFlyersInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutFlyersInput, CategoryUncheckedCreateWithoutFlyersInput>
  }

  export type UserCreateWithoutSavedFlyersInput = {
    id?: string
    email: string
    phone?: string | null
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: string | null
    preferredStores?: StoreCreateNestedManyWithoutFavoredByInput
    preferredCategories?: CategoryCreateNestedManyWithoutPreferredByInput
    savedCoupons?: CouponCreateNestedManyWithoutSavedByInput
    shoppingLists?: ShoppingListCreateNestedManyWithoutUserInput
    wishlist?: WishlistItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSavedFlyersInput = {
    id?: string
    email: string
    phone?: string | null
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: string | null
    preferredStores?: StoreUncheckedCreateNestedManyWithoutFavoredByInput
    preferredCategories?: CategoryUncheckedCreateNestedManyWithoutPreferredByInput
    savedCoupons?: CouponUncheckedCreateNestedManyWithoutSavedByInput
    shoppingLists?: ShoppingListUncheckedCreateNestedManyWithoutUserInput
    wishlist?: WishlistItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSavedFlyersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedFlyersInput, UserUncheckedCreateWithoutSavedFlyersInput>
  }

  export type FlyerItemCreateWithoutFlyerInput = {
    id?: string
    name: string
    price: number
    oldPrice?: number | null
    imageUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shoppingListItems?: ShoppingListItemCreateNestedManyWithoutFlyerItemInput
    wishlistItems?: WishlistItemCreateNestedManyWithoutFlyerItemInput
  }

  export type FlyerItemUncheckedCreateWithoutFlyerInput = {
    id?: string
    name: string
    price: number
    oldPrice?: number | null
    imageUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shoppingListItems?: ShoppingListItemUncheckedCreateNestedManyWithoutFlyerItemInput
    wishlistItems?: WishlistItemUncheckedCreateNestedManyWithoutFlyerItemInput
  }

  export type FlyerItemCreateOrConnectWithoutFlyerInput = {
    where: FlyerItemWhereUniqueInput
    create: XOR<FlyerItemCreateWithoutFlyerInput, FlyerItemUncheckedCreateWithoutFlyerInput>
  }

  export type FlyerItemCreateManyFlyerInputEnvelope = {
    data: FlyerItemCreateManyFlyerInput | FlyerItemCreateManyFlyerInput[]
    skipDuplicates?: boolean
  }

  export type StoreUpsertWithoutFlyersInput = {
    update: XOR<StoreUpdateWithoutFlyersInput, StoreUncheckedUpdateWithoutFlyersInput>
    create: XOR<StoreCreateWithoutFlyersInput, StoreUncheckedCreateWithoutFlyersInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutFlyersInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutFlyersInput, StoreUncheckedUpdateWithoutFlyersInput>
  }

  export type StoreUpdateWithoutFlyersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coupons?: CouponUpdateManyWithoutStoreNestedInput
    favoredBy?: UserUpdateManyWithoutPreferredStoresNestedInput
    categories?: CategoryUpdateManyWithoutStoresNestedInput
  }

  export type StoreUncheckedUpdateWithoutFlyersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coupons?: CouponUncheckedUpdateManyWithoutStoreNestedInput
    favoredBy?: UserUncheckedUpdateManyWithoutPreferredStoresNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutStoresNestedInput
  }

  export type CategoryUpsertWithWhereUniqueWithoutFlyersInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutFlyersInput, CategoryUncheckedUpdateWithoutFlyersInput>
    create: XOR<CategoryCreateWithoutFlyersInput, CategoryUncheckedCreateWithoutFlyersInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutFlyersInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutFlyersInput, CategoryUncheckedUpdateWithoutFlyersInput>
  }

  export type CategoryUpdateManyWithWhereWithoutFlyersInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutFlyersInput>
  }

  export type UserUpsertWithWhereUniqueWithoutSavedFlyersInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutSavedFlyersInput, UserUncheckedUpdateWithoutSavedFlyersInput>
    create: XOR<UserCreateWithoutSavedFlyersInput, UserUncheckedCreateWithoutSavedFlyersInput>
  }

  export type UserUpdateWithWhereUniqueWithoutSavedFlyersInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutSavedFlyersInput, UserUncheckedUpdateWithoutSavedFlyersInput>
  }

  export type UserUpdateManyWithWhereWithoutSavedFlyersInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutSavedFlyersInput>
  }

  export type FlyerItemUpsertWithWhereUniqueWithoutFlyerInput = {
    where: FlyerItemWhereUniqueInput
    update: XOR<FlyerItemUpdateWithoutFlyerInput, FlyerItemUncheckedUpdateWithoutFlyerInput>
    create: XOR<FlyerItemCreateWithoutFlyerInput, FlyerItemUncheckedCreateWithoutFlyerInput>
  }

  export type FlyerItemUpdateWithWhereUniqueWithoutFlyerInput = {
    where: FlyerItemWhereUniqueInput
    data: XOR<FlyerItemUpdateWithoutFlyerInput, FlyerItemUncheckedUpdateWithoutFlyerInput>
  }

  export type FlyerItemUpdateManyWithWhereWithoutFlyerInput = {
    where: FlyerItemScalarWhereInput
    data: XOR<FlyerItemUpdateManyMutationInput, FlyerItemUncheckedUpdateManyWithoutFlyerInput>
  }

  export type FlyerItemScalarWhereInput = {
    AND?: FlyerItemScalarWhereInput | FlyerItemScalarWhereInput[]
    OR?: FlyerItemScalarWhereInput[]
    NOT?: FlyerItemScalarWhereInput | FlyerItemScalarWhereInput[]
    id?: StringFilter<"FlyerItem"> | string
    flyerId?: StringFilter<"FlyerItem"> | string
    name?: StringFilter<"FlyerItem"> | string
    price?: FloatFilter<"FlyerItem"> | number
    oldPrice?: FloatNullableFilter<"FlyerItem"> | number | null
    imageUrl?: StringNullableFilter<"FlyerItem"> | string | null
    description?: StringNullableFilter<"FlyerItem"> | string | null
    createdAt?: DateTimeFilter<"FlyerItem"> | Date | string
    updatedAt?: DateTimeFilter<"FlyerItem"> | Date | string
  }

  export type FlyerCreateWithoutItemsInput = {
    id?: string
    title: string
    imageUrl: string
    startDate: Date | string
    endDate: Date | string
    isSponsored?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutFlyersInput
    categories?: CategoryCreateNestedManyWithoutFlyersInput
    savedBy?: UserCreateNestedManyWithoutSavedFlyersInput
  }

  export type FlyerUncheckedCreateWithoutItemsInput = {
    id?: string
    title: string
    storeId: string
    imageUrl: string
    startDate: Date | string
    endDate: Date | string
    isSponsored?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutFlyersInput
    savedBy?: UserUncheckedCreateNestedManyWithoutSavedFlyersInput
  }

  export type FlyerCreateOrConnectWithoutItemsInput = {
    where: FlyerWhereUniqueInput
    create: XOR<FlyerCreateWithoutItemsInput, FlyerUncheckedCreateWithoutItemsInput>
  }

  export type ShoppingListItemCreateWithoutFlyerItemInput = {
    id?: string
    name: string
    quantity?: number
    isChecked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    shoppingList: ShoppingListCreateNestedOneWithoutItemsInput
  }

  export type ShoppingListItemUncheckedCreateWithoutFlyerItemInput = {
    id?: string
    shoppingListId: string
    name: string
    quantity?: number
    isChecked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShoppingListItemCreateOrConnectWithoutFlyerItemInput = {
    where: ShoppingListItemWhereUniqueInput
    create: XOR<ShoppingListItemCreateWithoutFlyerItemInput, ShoppingListItemUncheckedCreateWithoutFlyerItemInput>
  }

  export type ShoppingListItemCreateManyFlyerItemInputEnvelope = {
    data: ShoppingListItemCreateManyFlyerItemInput | ShoppingListItemCreateManyFlyerItemInput[]
    skipDuplicates?: boolean
  }

  export type WishlistItemCreateWithoutFlyerItemInput = {
    id?: string
    name: string
    targetPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWishlistInput
  }

  export type WishlistItemUncheckedCreateWithoutFlyerItemInput = {
    id?: string
    userId: string
    name: string
    targetPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WishlistItemCreateOrConnectWithoutFlyerItemInput = {
    where: WishlistItemWhereUniqueInput
    create: XOR<WishlistItemCreateWithoutFlyerItemInput, WishlistItemUncheckedCreateWithoutFlyerItemInput>
  }

  export type WishlistItemCreateManyFlyerItemInputEnvelope = {
    data: WishlistItemCreateManyFlyerItemInput | WishlistItemCreateManyFlyerItemInput[]
    skipDuplicates?: boolean
  }

  export type FlyerUpsertWithoutItemsInput = {
    update: XOR<FlyerUpdateWithoutItemsInput, FlyerUncheckedUpdateWithoutItemsInput>
    create: XOR<FlyerCreateWithoutItemsInput, FlyerUncheckedCreateWithoutItemsInput>
    where?: FlyerWhereInput
  }

  export type FlyerUpdateToOneWithWhereWithoutItemsInput = {
    where?: FlyerWhereInput
    data: XOR<FlyerUpdateWithoutItemsInput, FlyerUncheckedUpdateWithoutItemsInput>
  }

  export type FlyerUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isSponsored?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutFlyersNestedInput
    categories?: CategoryUpdateManyWithoutFlyersNestedInput
    savedBy?: UserUpdateManyWithoutSavedFlyersNestedInput
  }

  export type FlyerUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isSponsored?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutFlyersNestedInput
    savedBy?: UserUncheckedUpdateManyWithoutSavedFlyersNestedInput
  }

  export type ShoppingListItemUpsertWithWhereUniqueWithoutFlyerItemInput = {
    where: ShoppingListItemWhereUniqueInput
    update: XOR<ShoppingListItemUpdateWithoutFlyerItemInput, ShoppingListItemUncheckedUpdateWithoutFlyerItemInput>
    create: XOR<ShoppingListItemCreateWithoutFlyerItemInput, ShoppingListItemUncheckedCreateWithoutFlyerItemInput>
  }

  export type ShoppingListItemUpdateWithWhereUniqueWithoutFlyerItemInput = {
    where: ShoppingListItemWhereUniqueInput
    data: XOR<ShoppingListItemUpdateWithoutFlyerItemInput, ShoppingListItemUncheckedUpdateWithoutFlyerItemInput>
  }

  export type ShoppingListItemUpdateManyWithWhereWithoutFlyerItemInput = {
    where: ShoppingListItemScalarWhereInput
    data: XOR<ShoppingListItemUpdateManyMutationInput, ShoppingListItemUncheckedUpdateManyWithoutFlyerItemInput>
  }

  export type ShoppingListItemScalarWhereInput = {
    AND?: ShoppingListItemScalarWhereInput | ShoppingListItemScalarWhereInput[]
    OR?: ShoppingListItemScalarWhereInput[]
    NOT?: ShoppingListItemScalarWhereInput | ShoppingListItemScalarWhereInput[]
    id?: StringFilter<"ShoppingListItem"> | string
    shoppingListId?: StringFilter<"ShoppingListItem"> | string
    flyerItemId?: StringNullableFilter<"ShoppingListItem"> | string | null
    name?: StringFilter<"ShoppingListItem"> | string
    quantity?: IntFilter<"ShoppingListItem"> | number
    isChecked?: BoolFilter<"ShoppingListItem"> | boolean
    createdAt?: DateTimeFilter<"ShoppingListItem"> | Date | string
    updatedAt?: DateTimeFilter<"ShoppingListItem"> | Date | string
  }

  export type WishlistItemUpsertWithWhereUniqueWithoutFlyerItemInput = {
    where: WishlistItemWhereUniqueInput
    update: XOR<WishlistItemUpdateWithoutFlyerItemInput, WishlistItemUncheckedUpdateWithoutFlyerItemInput>
    create: XOR<WishlistItemCreateWithoutFlyerItemInput, WishlistItemUncheckedCreateWithoutFlyerItemInput>
  }

  export type WishlistItemUpdateWithWhereUniqueWithoutFlyerItemInput = {
    where: WishlistItemWhereUniqueInput
    data: XOR<WishlistItemUpdateWithoutFlyerItemInput, WishlistItemUncheckedUpdateWithoutFlyerItemInput>
  }

  export type WishlistItemUpdateManyWithWhereWithoutFlyerItemInput = {
    where: WishlistItemScalarWhereInput
    data: XOR<WishlistItemUpdateManyMutationInput, WishlistItemUncheckedUpdateManyWithoutFlyerItemInput>
  }

  export type StoreCreateWithoutCouponsInput = {
    id?: string
    name: string
    logo?: string | null
    description?: string | null
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flyers?: FlyerCreateNestedManyWithoutStoreInput
    favoredBy?: UserCreateNestedManyWithoutPreferredStoresInput
    categories?: CategoryCreateNestedManyWithoutStoresInput
  }

  export type StoreUncheckedCreateWithoutCouponsInput = {
    id?: string
    name: string
    logo?: string | null
    description?: string | null
    address?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flyers?: FlyerUncheckedCreateNestedManyWithoutStoreInput
    favoredBy?: UserUncheckedCreateNestedManyWithoutPreferredStoresInput
    categories?: CategoryUncheckedCreateNestedManyWithoutStoresInput
  }

  export type StoreCreateOrConnectWithoutCouponsInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutCouponsInput, StoreUncheckedCreateWithoutCouponsInput>
  }

  export type CategoryCreateWithoutCouponsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flyers?: FlyerCreateNestedManyWithoutCategoriesInput
    stores?: StoreCreateNestedManyWithoutCategoriesInput
    preferredBy?: UserCreateNestedManyWithoutPreferredCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutCouponsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flyers?: FlyerUncheckedCreateNestedManyWithoutCategoriesInput
    stores?: StoreUncheckedCreateNestedManyWithoutCategoriesInput
    preferredBy?: UserUncheckedCreateNestedManyWithoutPreferredCategoriesInput
  }

  export type CategoryCreateOrConnectWithoutCouponsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutCouponsInput, CategoryUncheckedCreateWithoutCouponsInput>
  }

  export type UserCreateWithoutSavedCouponsInput = {
    id?: string
    email: string
    phone?: string | null
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: string | null
    preferredStores?: StoreCreateNestedManyWithoutFavoredByInput
    preferredCategories?: CategoryCreateNestedManyWithoutPreferredByInput
    savedFlyers?: FlyerCreateNestedManyWithoutSavedByInput
    shoppingLists?: ShoppingListCreateNestedManyWithoutUserInput
    wishlist?: WishlistItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSavedCouponsInput = {
    id?: string
    email: string
    phone?: string | null
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: string | null
    preferredStores?: StoreUncheckedCreateNestedManyWithoutFavoredByInput
    preferredCategories?: CategoryUncheckedCreateNestedManyWithoutPreferredByInput
    savedFlyers?: FlyerUncheckedCreateNestedManyWithoutSavedByInput
    shoppingLists?: ShoppingListUncheckedCreateNestedManyWithoutUserInput
    wishlist?: WishlistItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSavedCouponsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedCouponsInput, UserUncheckedCreateWithoutSavedCouponsInput>
  }

  export type StoreUpsertWithoutCouponsInput = {
    update: XOR<StoreUpdateWithoutCouponsInput, StoreUncheckedUpdateWithoutCouponsInput>
    create: XOR<StoreCreateWithoutCouponsInput, StoreUncheckedCreateWithoutCouponsInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutCouponsInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutCouponsInput, StoreUncheckedUpdateWithoutCouponsInput>
  }

  export type StoreUpdateWithoutCouponsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flyers?: FlyerUpdateManyWithoutStoreNestedInput
    favoredBy?: UserUpdateManyWithoutPreferredStoresNestedInput
    categories?: CategoryUpdateManyWithoutStoresNestedInput
  }

  export type StoreUncheckedUpdateWithoutCouponsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flyers?: FlyerUncheckedUpdateManyWithoutStoreNestedInput
    favoredBy?: UserUncheckedUpdateManyWithoutPreferredStoresNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutStoresNestedInput
  }

  export type CategoryUpsertWithWhereUniqueWithoutCouponsInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutCouponsInput, CategoryUncheckedUpdateWithoutCouponsInput>
    create: XOR<CategoryCreateWithoutCouponsInput, CategoryUncheckedCreateWithoutCouponsInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutCouponsInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutCouponsInput, CategoryUncheckedUpdateWithoutCouponsInput>
  }

  export type CategoryUpdateManyWithWhereWithoutCouponsInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutCouponsInput>
  }

  export type UserUpsertWithWhereUniqueWithoutSavedCouponsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutSavedCouponsInput, UserUncheckedUpdateWithoutSavedCouponsInput>
    create: XOR<UserCreateWithoutSavedCouponsInput, UserUncheckedCreateWithoutSavedCouponsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutSavedCouponsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutSavedCouponsInput, UserUncheckedUpdateWithoutSavedCouponsInput>
  }

  export type UserUpdateManyWithWhereWithoutSavedCouponsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutSavedCouponsInput>
  }

  export type UserCreateWithoutShoppingListsInput = {
    id?: string
    email: string
    phone?: string | null
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: string | null
    preferredStores?: StoreCreateNestedManyWithoutFavoredByInput
    preferredCategories?: CategoryCreateNestedManyWithoutPreferredByInput
    savedFlyers?: FlyerCreateNestedManyWithoutSavedByInput
    savedCoupons?: CouponCreateNestedManyWithoutSavedByInput
    wishlist?: WishlistItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutShoppingListsInput = {
    id?: string
    email: string
    phone?: string | null
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: string | null
    preferredStores?: StoreUncheckedCreateNestedManyWithoutFavoredByInput
    preferredCategories?: CategoryUncheckedCreateNestedManyWithoutPreferredByInput
    savedFlyers?: FlyerUncheckedCreateNestedManyWithoutSavedByInput
    savedCoupons?: CouponUncheckedCreateNestedManyWithoutSavedByInput
    wishlist?: WishlistItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutShoppingListsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShoppingListsInput, UserUncheckedCreateWithoutShoppingListsInput>
  }

  export type ShoppingListItemCreateWithoutShoppingListInput = {
    id?: string
    name: string
    quantity?: number
    isChecked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    flyerItem?: FlyerItemCreateNestedOneWithoutShoppingListItemsInput
  }

  export type ShoppingListItemUncheckedCreateWithoutShoppingListInput = {
    id?: string
    flyerItemId?: string | null
    name: string
    quantity?: number
    isChecked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShoppingListItemCreateOrConnectWithoutShoppingListInput = {
    where: ShoppingListItemWhereUniqueInput
    create: XOR<ShoppingListItemCreateWithoutShoppingListInput, ShoppingListItemUncheckedCreateWithoutShoppingListInput>
  }

  export type ShoppingListItemCreateManyShoppingListInputEnvelope = {
    data: ShoppingListItemCreateManyShoppingListInput | ShoppingListItemCreateManyShoppingListInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutShoppingListsInput = {
    update: XOR<UserUpdateWithoutShoppingListsInput, UserUncheckedUpdateWithoutShoppingListsInput>
    create: XOR<UserCreateWithoutShoppingListsInput, UserUncheckedCreateWithoutShoppingListsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShoppingListsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShoppingListsInput, UserUncheckedUpdateWithoutShoppingListsInput>
  }

  export type UserUpdateWithoutShoppingListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    preferredStores?: StoreUpdateManyWithoutFavoredByNestedInput
    preferredCategories?: CategoryUpdateManyWithoutPreferredByNestedInput
    savedFlyers?: FlyerUpdateManyWithoutSavedByNestedInput
    savedCoupons?: CouponUpdateManyWithoutSavedByNestedInput
    wishlist?: WishlistItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutShoppingListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    preferredStores?: StoreUncheckedUpdateManyWithoutFavoredByNestedInput
    preferredCategories?: CategoryUncheckedUpdateManyWithoutPreferredByNestedInput
    savedFlyers?: FlyerUncheckedUpdateManyWithoutSavedByNestedInput
    savedCoupons?: CouponUncheckedUpdateManyWithoutSavedByNestedInput
    wishlist?: WishlistItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ShoppingListItemUpsertWithWhereUniqueWithoutShoppingListInput = {
    where: ShoppingListItemWhereUniqueInput
    update: XOR<ShoppingListItemUpdateWithoutShoppingListInput, ShoppingListItemUncheckedUpdateWithoutShoppingListInput>
    create: XOR<ShoppingListItemCreateWithoutShoppingListInput, ShoppingListItemUncheckedCreateWithoutShoppingListInput>
  }

  export type ShoppingListItemUpdateWithWhereUniqueWithoutShoppingListInput = {
    where: ShoppingListItemWhereUniqueInput
    data: XOR<ShoppingListItemUpdateWithoutShoppingListInput, ShoppingListItemUncheckedUpdateWithoutShoppingListInput>
  }

  export type ShoppingListItemUpdateManyWithWhereWithoutShoppingListInput = {
    where: ShoppingListItemScalarWhereInput
    data: XOR<ShoppingListItemUpdateManyMutationInput, ShoppingListItemUncheckedUpdateManyWithoutShoppingListInput>
  }

  export type ShoppingListCreateWithoutItemsInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutShoppingListsInput
  }

  export type ShoppingListUncheckedCreateWithoutItemsInput = {
    id?: string
    title: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShoppingListCreateOrConnectWithoutItemsInput = {
    where: ShoppingListWhereUniqueInput
    create: XOR<ShoppingListCreateWithoutItemsInput, ShoppingListUncheckedCreateWithoutItemsInput>
  }

  export type FlyerItemCreateWithoutShoppingListItemsInput = {
    id?: string
    name: string
    price: number
    oldPrice?: number | null
    imageUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flyer: FlyerCreateNestedOneWithoutItemsInput
    wishlistItems?: WishlistItemCreateNestedManyWithoutFlyerItemInput
  }

  export type FlyerItemUncheckedCreateWithoutShoppingListItemsInput = {
    id?: string
    flyerId: string
    name: string
    price: number
    oldPrice?: number | null
    imageUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wishlistItems?: WishlistItemUncheckedCreateNestedManyWithoutFlyerItemInput
  }

  export type FlyerItemCreateOrConnectWithoutShoppingListItemsInput = {
    where: FlyerItemWhereUniqueInput
    create: XOR<FlyerItemCreateWithoutShoppingListItemsInput, FlyerItemUncheckedCreateWithoutShoppingListItemsInput>
  }

  export type ShoppingListUpsertWithoutItemsInput = {
    update: XOR<ShoppingListUpdateWithoutItemsInput, ShoppingListUncheckedUpdateWithoutItemsInput>
    create: XOR<ShoppingListCreateWithoutItemsInput, ShoppingListUncheckedCreateWithoutItemsInput>
    where?: ShoppingListWhereInput
  }

  export type ShoppingListUpdateToOneWithWhereWithoutItemsInput = {
    where?: ShoppingListWhereInput
    data: XOR<ShoppingListUpdateWithoutItemsInput, ShoppingListUncheckedUpdateWithoutItemsInput>
  }

  export type ShoppingListUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutShoppingListsNestedInput
  }

  export type ShoppingListUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlyerItemUpsertWithoutShoppingListItemsInput = {
    update: XOR<FlyerItemUpdateWithoutShoppingListItemsInput, FlyerItemUncheckedUpdateWithoutShoppingListItemsInput>
    create: XOR<FlyerItemCreateWithoutShoppingListItemsInput, FlyerItemUncheckedCreateWithoutShoppingListItemsInput>
    where?: FlyerItemWhereInput
  }

  export type FlyerItemUpdateToOneWithWhereWithoutShoppingListItemsInput = {
    where?: FlyerItemWhereInput
    data: XOR<FlyerItemUpdateWithoutShoppingListItemsInput, FlyerItemUncheckedUpdateWithoutShoppingListItemsInput>
  }

  export type FlyerItemUpdateWithoutShoppingListItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    oldPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flyer?: FlyerUpdateOneRequiredWithoutItemsNestedInput
    wishlistItems?: WishlistItemUpdateManyWithoutFlyerItemNestedInput
  }

  export type FlyerItemUncheckedUpdateWithoutShoppingListItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    flyerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    oldPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wishlistItems?: WishlistItemUncheckedUpdateManyWithoutFlyerItemNestedInput
  }

  export type UserCreateWithoutWishlistInput = {
    id?: string
    email: string
    phone?: string | null
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: string | null
    preferredStores?: StoreCreateNestedManyWithoutFavoredByInput
    preferredCategories?: CategoryCreateNestedManyWithoutPreferredByInput
    savedFlyers?: FlyerCreateNestedManyWithoutSavedByInput
    savedCoupons?: CouponCreateNestedManyWithoutSavedByInput
    shoppingLists?: ShoppingListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWishlistInput = {
    id?: string
    email: string
    phone?: string | null
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: string | null
    preferredStores?: StoreUncheckedCreateNestedManyWithoutFavoredByInput
    preferredCategories?: CategoryUncheckedCreateNestedManyWithoutPreferredByInput
    savedFlyers?: FlyerUncheckedCreateNestedManyWithoutSavedByInput
    savedCoupons?: CouponUncheckedCreateNestedManyWithoutSavedByInput
    shoppingLists?: ShoppingListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWishlistInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWishlistInput, UserUncheckedCreateWithoutWishlistInput>
  }

  export type FlyerItemCreateWithoutWishlistItemsInput = {
    id?: string
    name: string
    price: number
    oldPrice?: number | null
    imageUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flyer: FlyerCreateNestedOneWithoutItemsInput
    shoppingListItems?: ShoppingListItemCreateNestedManyWithoutFlyerItemInput
  }

  export type FlyerItemUncheckedCreateWithoutWishlistItemsInput = {
    id?: string
    flyerId: string
    name: string
    price: number
    oldPrice?: number | null
    imageUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shoppingListItems?: ShoppingListItemUncheckedCreateNestedManyWithoutFlyerItemInput
  }

  export type FlyerItemCreateOrConnectWithoutWishlistItemsInput = {
    where: FlyerItemWhereUniqueInput
    create: XOR<FlyerItemCreateWithoutWishlistItemsInput, FlyerItemUncheckedCreateWithoutWishlistItemsInput>
  }

  export type UserUpsertWithoutWishlistInput = {
    update: XOR<UserUpdateWithoutWishlistInput, UserUncheckedUpdateWithoutWishlistInput>
    create: XOR<UserCreateWithoutWishlistInput, UserUncheckedCreateWithoutWishlistInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWishlistInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWishlistInput, UserUncheckedUpdateWithoutWishlistInput>
  }

  export type UserUpdateWithoutWishlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    preferredStores?: StoreUpdateManyWithoutFavoredByNestedInput
    preferredCategories?: CategoryUpdateManyWithoutPreferredByNestedInput
    savedFlyers?: FlyerUpdateManyWithoutSavedByNestedInput
    savedCoupons?: CouponUpdateManyWithoutSavedByNestedInput
    shoppingLists?: ShoppingListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWishlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    preferredStores?: StoreUncheckedUpdateManyWithoutFavoredByNestedInput
    preferredCategories?: CategoryUncheckedUpdateManyWithoutPreferredByNestedInput
    savedFlyers?: FlyerUncheckedUpdateManyWithoutSavedByNestedInput
    savedCoupons?: CouponUncheckedUpdateManyWithoutSavedByNestedInput
    shoppingLists?: ShoppingListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FlyerItemUpsertWithoutWishlistItemsInput = {
    update: XOR<FlyerItemUpdateWithoutWishlistItemsInput, FlyerItemUncheckedUpdateWithoutWishlistItemsInput>
    create: XOR<FlyerItemCreateWithoutWishlistItemsInput, FlyerItemUncheckedCreateWithoutWishlistItemsInput>
    where?: FlyerItemWhereInput
  }

  export type FlyerItemUpdateToOneWithWhereWithoutWishlistItemsInput = {
    where?: FlyerItemWhereInput
    data: XOR<FlyerItemUpdateWithoutWishlistItemsInput, FlyerItemUncheckedUpdateWithoutWishlistItemsInput>
  }

  export type FlyerItemUpdateWithoutWishlistItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    oldPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flyer?: FlyerUpdateOneRequiredWithoutItemsNestedInput
    shoppingListItems?: ShoppingListItemUpdateManyWithoutFlyerItemNestedInput
  }

  export type FlyerItemUncheckedUpdateWithoutWishlistItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    flyerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    oldPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shoppingListItems?: ShoppingListItemUncheckedUpdateManyWithoutFlyerItemNestedInput
  }

  export type ShoppingListCreateManyUserInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WishlistItemCreateManyUserInput = {
    id?: string
    flyerItemId?: string | null
    name: string
    targetPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreUpdateWithoutFavoredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flyers?: FlyerUpdateManyWithoutStoreNestedInput
    coupons?: CouponUpdateManyWithoutStoreNestedInput
    categories?: CategoryUpdateManyWithoutStoresNestedInput
  }

  export type StoreUncheckedUpdateWithoutFavoredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flyers?: FlyerUncheckedUpdateManyWithoutStoreNestedInput
    coupons?: CouponUncheckedUpdateManyWithoutStoreNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutStoresNestedInput
  }

  export type StoreUncheckedUpdateManyWithoutFavoredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpdateWithoutPreferredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flyers?: FlyerUpdateManyWithoutCategoriesNestedInput
    coupons?: CouponUpdateManyWithoutCategoriesNestedInput
    stores?: StoreUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutPreferredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flyers?: FlyerUncheckedUpdateManyWithoutCategoriesNestedInput
    coupons?: CouponUncheckedUpdateManyWithoutCategoriesNestedInput
    stores?: StoreUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutPreferredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlyerUpdateWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isSponsored?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutFlyersNestedInput
    categories?: CategoryUpdateManyWithoutFlyersNestedInput
    items?: FlyerItemUpdateManyWithoutFlyerNestedInput
  }

  export type FlyerUncheckedUpdateWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isSponsored?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutFlyersNestedInput
    items?: FlyerItemUncheckedUpdateManyWithoutFlyerNestedInput
  }

  export type FlyerUncheckedUpdateManyWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isSponsored?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUpdateWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    barcodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInStore?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutCouponsNestedInput
    categories?: CategoryUpdateManyWithoutCouponsNestedInput
  }

  export type CouponUncheckedUpdateWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    barcodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInStore?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutCouponsNestedInput
  }

  export type CouponUncheckedUpdateManyWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    barcodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInStore?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShoppingListUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ShoppingListItemUpdateManyWithoutShoppingListNestedInput
  }

  export type ShoppingListUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ShoppingListItemUncheckedUpdateManyWithoutShoppingListNestedInput
  }

  export type ShoppingListUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistItemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flyerItem?: FlyerItemUpdateOneWithoutWishlistItemsNestedInput
  }

  export type WishlistItemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    flyerItemId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    targetPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistItemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    flyerItemId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    targetPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlyerCreateManyStoreInput = {
    id?: string
    title: string
    imageUrl: string
    startDate: Date | string
    endDate: Date | string
    isSponsored?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CouponCreateManyStoreInput = {
    id?: string
    title: string
    code?: string | null
    barcodeUrl?: string | null
    qrCodeUrl?: string | null
    discount: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    isOnline?: boolean
    isInStore?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlyerUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isSponsored?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutFlyersNestedInput
    savedBy?: UserUpdateManyWithoutSavedFlyersNestedInput
    items?: FlyerItemUpdateManyWithoutFlyerNestedInput
  }

  export type FlyerUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isSponsored?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutFlyersNestedInput
    savedBy?: UserUncheckedUpdateManyWithoutSavedFlyersNestedInput
    items?: FlyerItemUncheckedUpdateManyWithoutFlyerNestedInput
  }

  export type FlyerUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isSponsored?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    barcodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInStore?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutCouponsNestedInput
    savedBy?: UserUpdateManyWithoutSavedCouponsNestedInput
  }

  export type CouponUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    barcodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInStore?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutCouponsNestedInput
    savedBy?: UserUncheckedUpdateManyWithoutSavedCouponsNestedInput
  }

  export type CouponUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    barcodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInStore?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutPreferredStoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    preferredCategories?: CategoryUpdateManyWithoutPreferredByNestedInput
    savedFlyers?: FlyerUpdateManyWithoutSavedByNestedInput
    savedCoupons?: CouponUpdateManyWithoutSavedByNestedInput
    shoppingLists?: ShoppingListUpdateManyWithoutUserNestedInput
    wishlist?: WishlistItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPreferredStoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    preferredCategories?: CategoryUncheckedUpdateManyWithoutPreferredByNestedInput
    savedFlyers?: FlyerUncheckedUpdateManyWithoutSavedByNestedInput
    savedCoupons?: CouponUncheckedUpdateManyWithoutSavedByNestedInput
    shoppingLists?: ShoppingListUncheckedUpdateManyWithoutUserNestedInput
    wishlist?: WishlistItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutPreferredStoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUpdateWithoutStoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flyers?: FlyerUpdateManyWithoutCategoriesNestedInput
    coupons?: CouponUpdateManyWithoutCategoriesNestedInput
    preferredBy?: UserUpdateManyWithoutPreferredCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutStoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flyers?: FlyerUncheckedUpdateManyWithoutCategoriesNestedInput
    coupons?: CouponUncheckedUpdateManyWithoutCategoriesNestedInput
    preferredBy?: UserUncheckedUpdateManyWithoutPreferredCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutStoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlyerUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isSponsored?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutFlyersNestedInput
    savedBy?: UserUpdateManyWithoutSavedFlyersNestedInput
    items?: FlyerItemUpdateManyWithoutFlyerNestedInput
  }

  export type FlyerUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isSponsored?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedBy?: UserUncheckedUpdateManyWithoutSavedFlyersNestedInput
    items?: FlyerItemUncheckedUpdateManyWithoutFlyerNestedInput
  }

  export type FlyerUncheckedUpdateManyWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isSponsored?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    barcodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInStore?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutCouponsNestedInput
    savedBy?: UserUpdateManyWithoutSavedCouponsNestedInput
  }

  export type CouponUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    barcodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInStore?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedBy?: UserUncheckedUpdateManyWithoutSavedCouponsNestedInput
  }

  export type CouponUncheckedUpdateManyWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    barcodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    isInStore?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flyers?: FlyerUpdateManyWithoutStoreNestedInput
    coupons?: CouponUpdateManyWithoutStoreNestedInput
    favoredBy?: UserUpdateManyWithoutPreferredStoresNestedInput
  }

  export type StoreUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flyers?: FlyerUncheckedUpdateManyWithoutStoreNestedInput
    coupons?: CouponUncheckedUpdateManyWithoutStoreNestedInput
    favoredBy?: UserUncheckedUpdateManyWithoutPreferredStoresNestedInput
  }

  export type StoreUncheckedUpdateManyWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutPreferredCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    preferredStores?: StoreUpdateManyWithoutFavoredByNestedInput
    savedFlyers?: FlyerUpdateManyWithoutSavedByNestedInput
    savedCoupons?: CouponUpdateManyWithoutSavedByNestedInput
    shoppingLists?: ShoppingListUpdateManyWithoutUserNestedInput
    wishlist?: WishlistItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPreferredCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    preferredStores?: StoreUncheckedUpdateManyWithoutFavoredByNestedInput
    savedFlyers?: FlyerUncheckedUpdateManyWithoutSavedByNestedInput
    savedCoupons?: CouponUncheckedUpdateManyWithoutSavedByNestedInput
    shoppingLists?: ShoppingListUncheckedUpdateManyWithoutUserNestedInput
    wishlist?: WishlistItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutPreferredCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FlyerItemCreateManyFlyerInput = {
    id?: string
    name: string
    price: number
    oldPrice?: number | null
    imageUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateWithoutFlyersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coupons?: CouponUpdateManyWithoutCategoriesNestedInput
    stores?: StoreUpdateManyWithoutCategoriesNestedInput
    preferredBy?: UserUpdateManyWithoutPreferredCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutFlyersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coupons?: CouponUncheckedUpdateManyWithoutCategoriesNestedInput
    stores?: StoreUncheckedUpdateManyWithoutCategoriesNestedInput
    preferredBy?: UserUncheckedUpdateManyWithoutPreferredCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutFlyersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutSavedFlyersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    preferredStores?: StoreUpdateManyWithoutFavoredByNestedInput
    preferredCategories?: CategoryUpdateManyWithoutPreferredByNestedInput
    savedCoupons?: CouponUpdateManyWithoutSavedByNestedInput
    shoppingLists?: ShoppingListUpdateManyWithoutUserNestedInput
    wishlist?: WishlistItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedFlyersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    preferredStores?: StoreUncheckedUpdateManyWithoutFavoredByNestedInput
    preferredCategories?: CategoryUncheckedUpdateManyWithoutPreferredByNestedInput
    savedCoupons?: CouponUncheckedUpdateManyWithoutSavedByNestedInput
    shoppingLists?: ShoppingListUncheckedUpdateManyWithoutUserNestedInput
    wishlist?: WishlistItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutSavedFlyersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FlyerItemUpdateWithoutFlyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    oldPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shoppingListItems?: ShoppingListItemUpdateManyWithoutFlyerItemNestedInput
    wishlistItems?: WishlistItemUpdateManyWithoutFlyerItemNestedInput
  }

  export type FlyerItemUncheckedUpdateWithoutFlyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    oldPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shoppingListItems?: ShoppingListItemUncheckedUpdateManyWithoutFlyerItemNestedInput
    wishlistItems?: WishlistItemUncheckedUpdateManyWithoutFlyerItemNestedInput
  }

  export type FlyerItemUncheckedUpdateManyWithoutFlyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    oldPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShoppingListItemCreateManyFlyerItemInput = {
    id?: string
    shoppingListId: string
    name: string
    quantity?: number
    isChecked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WishlistItemCreateManyFlyerItemInput = {
    id?: string
    userId: string
    name: string
    targetPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShoppingListItemUpdateWithoutFlyerItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    isChecked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shoppingList?: ShoppingListUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ShoppingListItemUncheckedUpdateWithoutFlyerItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    shoppingListId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    isChecked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShoppingListItemUncheckedUpdateManyWithoutFlyerItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    shoppingListId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    isChecked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistItemUpdateWithoutFlyerItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWishlistNestedInput
  }

  export type WishlistItemUncheckedUpdateWithoutFlyerItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistItemUncheckedUpdateManyWithoutFlyerItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpdateWithoutCouponsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flyers?: FlyerUpdateManyWithoutCategoriesNestedInput
    stores?: StoreUpdateManyWithoutCategoriesNestedInput
    preferredBy?: UserUpdateManyWithoutPreferredCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutCouponsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flyers?: FlyerUncheckedUpdateManyWithoutCategoriesNestedInput
    stores?: StoreUncheckedUpdateManyWithoutCategoriesNestedInput
    preferredBy?: UserUncheckedUpdateManyWithoutPreferredCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutCouponsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutSavedCouponsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    preferredStores?: StoreUpdateManyWithoutFavoredByNestedInput
    preferredCategories?: CategoryUpdateManyWithoutPreferredByNestedInput
    savedFlyers?: FlyerUpdateManyWithoutSavedByNestedInput
    shoppingLists?: ShoppingListUpdateManyWithoutUserNestedInput
    wishlist?: WishlistItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedCouponsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    preferredStores?: StoreUncheckedUpdateManyWithoutFavoredByNestedInput
    preferredCategories?: CategoryUncheckedUpdateManyWithoutPreferredByNestedInput
    savedFlyers?: FlyerUncheckedUpdateManyWithoutSavedByNestedInput
    shoppingLists?: ShoppingListUncheckedUpdateManyWithoutUserNestedInput
    wishlist?: WishlistItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutSavedCouponsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShoppingListItemCreateManyShoppingListInput = {
    id?: string
    flyerItemId?: string | null
    name: string
    quantity?: number
    isChecked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShoppingListItemUpdateWithoutShoppingListInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    isChecked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flyerItem?: FlyerItemUpdateOneWithoutShoppingListItemsNestedInput
  }

  export type ShoppingListItemUncheckedUpdateWithoutShoppingListInput = {
    id?: StringFieldUpdateOperationsInput | string
    flyerItemId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    isChecked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShoppingListItemUncheckedUpdateManyWithoutShoppingListInput = {
    id?: StringFieldUpdateOperationsInput | string
    flyerItemId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    isChecked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}