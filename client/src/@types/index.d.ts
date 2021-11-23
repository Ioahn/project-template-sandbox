type MaybeNull<T> = T | null;
type MaybeString<T> = T | string;

type Optional<T> = {
    [Keys in keyof T]?: T[Keys] 
}