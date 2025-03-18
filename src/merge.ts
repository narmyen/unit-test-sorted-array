export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
  let result: number[] = [];
  let i = 0, j = 0, k = 0;

  while (i < collection_1.length && j < collection_2.length) {
    // ถ้า collection_1 < collection_2 ก็จะเลือก collection_1 ลงไปใน Array ก่อน
    // ถ้า collection_1 > collection_2 ก็จะเลือก collection_2 ลงไปใน Array ก่อน
    if (collection_1[i] < collection_2[j]) {
      result.push(collection_1[i]);
      i++;

    } else {

      result.push(collection_2[j]);
      j++;
    }
  }

  // ถ้ายังเหลือเลขอยู่ใน collection_1
  while (i < collection_1.length) {
    result.push(collection_1[i]);
    i++;
  }

  // ถ้ายังเหลือเลขอยู่ใน collection_2
  while (j < collection_2.length) {
    result.push(collection_2[j]);
    j++;
  }

  while (k < collection_3.length) {
    let currentValue = collection_3[k];
    let inserted = false;

    for (let m = 0; m < result.length; m++) {
      if (result[m] > currentValue) {
        // แทรกค่าที่ตำแหน่ง m โดยการย้ายค่าที่มีอยู่แล้วไปข้างหลัง
        for (let n = result.length; n > m; n--) {
          result[n] = result[n - 1];
        }
        result[m] = currentValue;
        inserted = true;
        break;
      }
    }

    // ถ้า collection_3 ตัวที่ยังไม่ถูฏแทรกเข้าไป
    if (!inserted) {
      result.push(currentValue);
    }

    k++;
  }

  return result;
}