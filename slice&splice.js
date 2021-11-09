function frankenSplice(arr1, arr2, n) {
  let localarr = arr2.slice();
  localarr.splice(n,0,...arr1);
  return localarr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
