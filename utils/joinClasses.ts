type ClassValue =
  | string
  | null
  | undefined
  | boolean
  | Record<string, boolean>
  | ClassValue[];

export function joinClasses(...classes: ClassValue[]): string {
  const result: string[] = [];

  for (const item of classes) {
    if (!item) {
      continue;
    }

    if (typeof item === "string") {
      result.push(item);
    } else if (Array.isArray(item)) {
      result.push(joinClasses(...item));
    } else if (typeof item === "object") {
      for (const [key, value] of Object.entries(item)) {
        if (value) {
          result.push(key);
        }
      }
    }
  }

  return result.join(" ");
}
