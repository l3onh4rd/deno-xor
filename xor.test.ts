import { assertEquals } from "https://deno.land/std@0.117.0/testing/asserts.ts";
import { xor } from "./xor.ts";

Deno.test('xor function should return true', () => {
    const result = xor(true, false);
    assertEquals(result, true);
});

Deno.test('xor function should return true', () => {
    const result = xor(false, true);
    assertEquals(result, true);
});

Deno.test('xor function should return false', () => {
    const result = xor(false, false);
    assertEquals(result, false);
});

Deno.test('xor function should return false', () => {
    const result = xor(true, true);
    assertEquals(result, false);
});