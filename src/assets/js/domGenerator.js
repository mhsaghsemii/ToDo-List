const p = (e) => {
  const { tag: i, attributes: n, dataAttributes: o, properties: s, eventListeners: r } = e, c = i instanceof HTMLElement;
  if (!c && !(typeof i == "string"))
    throw new Error("Please provide a string tag or a DOM element");
  const a = c ? i : document.createElement(i);
  if (n instanceof Object)
    for (const t in n)
      a.setAttribute(t, n[t]);
  else
    n && console.warn("Skipping 'attributes' since it is not an object.");
  if (o instanceof Object)
    for (const t in o)
      a.dataset[t] = o[t];
  else
    o && console.warn("Skipping 'dataAttributes' since it is not an object.");
  if (s instanceof Object)
    for (const t in s)
      a[t] = s[t];
  else
    s && console.warn("Skipping 'properties' since it is not an object.");
  if (r instanceof Object)
    for (const t in r) {
      const f = r[t];
      if (typeof f != "function") {
        console.warn(`Skipping '${t}' handler, since it is not a function.`);
        continue;
      }
      a.addEventListener(t, f);
    }
  else
    r && console.warn("Skipping 'eventListeners' since it is not an object.");
  return a;
}, l = ({ children: e, ...i }) => {
  const n = p(i);
  if (e instanceof Object) {
    Array.isArray(e) || (e = [e]);
    for (const o of e) {
      const s = l(o);
      n.append(s);
    }
  }
  return n;
};
export {
  l as default
};
