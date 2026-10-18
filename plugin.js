// Plugin de prueba: le entrega ref "yt:<id>" a la app TubeKino Resolver (protocolo "ytvideo").
const RESOLVER = "com.susejing.tubekino";

export async function home() {
  return [
    {
      id: "fase0",
      title: "Fase 0 — pruebas",
      ref: "fase0",
      items: [
        { id: "demo", ref: "yt:dQw4w9WgXcQ", title: "TubeKino de prueba (demo MP4)", kind: "movie", year: 2026,
          overview: "Cualquier ref yt:<id> responde (por ahora) con el video de demostración. Si ves las barras de colores, el protocolo completo funciona." }
      ]
    }
  ];
}

export async function search(q) {
  const n = String(q.q || "").toLowerCase();
  if (!n || "prueba tubekino fase demo".includes(n)) return home()[0].items;
  return [];
}

export async function resolve(ref) {
  if (!ref.startsWith("yt:")) throw kino.error("not_found", "ref desconocido");
  return { external: { protocol: "ytvideo", ref, resolver: RESOLVER } };
}
