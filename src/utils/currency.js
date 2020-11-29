export function formatCurrency(
  amount,
  withSymbol = true,
  stripDecimals = true
) {
  let formatted = new Intl.NumberFormat("en-NG", {
    currency: "NGN",
    style: "currency"
  }).format(amount);
  if (!withSymbol) formatted = formatted.substr(withSymbol ? 0 : 1);
  if (stripDecimals) formatted = formatted.substring(0, formatted.indexOf("."));
  return formatted;
}
