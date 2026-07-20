/* ════════════════════════════════════════════════════════════════
   CORAL TURQUESA SOUVENIRS · DATOS DEL CATÁLOGO
   ─────────────────────────────────────────────────────────────────
   ★ ESTE ES EL ÚNICO ARCHIVO QUE NECESITAS EDITAR PARA:
       · Agregar un artículo   → copia una línea y cambia los datos
       · Quitar un artículo    → borra su línea (o pon visible: false)
       · Ocultar temporalmente → visible: false  (no lo borras)
       · Marcar novedades      → nuevo: true
       · Marcar más vendidos   → destacado: true
       · Cambiar WhatsApp, Instagram o correo → sección CONFIG

   ★ LAS FOTOS NO SE PONEN AQUÍ:
       Cada artículo ya tiene su foto en la carpeta img/ con el nombre
       de su clave (ej. img/CT-001.jpg). Si cambias una foto, guárdala
       con la misma clave y la página la muestra automáticamente.

   ★ Guía completa: "LEEME - COMO EDITAR EL CATALOGO.txt"
   ════════════════════════════════════════════════════════════════ */

/* ── DATOS DE CONTACTO (un solo lugar para todo el sitio) ──────── */
const CONFIG = {
  whatsapp:  "529981890854",              // solo números, con 52 al inicio
  instagram: "coralturquesa_souvenirs",
  email:     "",                          // ← escribe tu correo aquí y aparecerá solo en la página
  negocio:   "Coral Turquesa Souvenirs",
};

/* ── CATEGORÍAS ────────────────────────────────────────────────
   Puedes cambiar nombres, descripciones y el total mostrado.
   Los colores se asignan automáticamente según el orden.        */
const CATEGORIAS = [
  { id: "gorras", nombre: "Gorras y Sombreros", emoji: "🧢", total: "52", desc: "Gorras clásicas, tipo trucker y sombreros de pescador para todas las edades" },
  { id: "lentes", nombre: "Lentes de Sol", emoji: "🕶️", total: "7", desc: "Lentes de sol de colores, listos para exhibir en mostrador" },
  { id: "llaveros", nombre: "Llaveros", emoji: "🔑", total: "13", desc: "Llaveros destapador, de corazón, tabla de surf y tortugas del Caribe" },
  { id: "imanes", nombre: "Imanes", emoji: "🧲", total: "19", desc: "Imanes de refrigerador de Cancún, Costa Maya y México" },
  { id: "esferas", nombre: "Esferas de Nieve", emoji: "🔮", total: "14", desc: "Esferas de nieve de tortugas y delfines, el recuerdo clásico del Caribe" },
  { id: "figuras", nombre: "Figuras y Decoración", emoji: "🐬", total: "13", desc: "Barcos, faros, delfines y figuras decorativas marinas" },
  { id: "portarretratos", nombre: "Portarretratos", emoji: "🖼️", total: "6", desc: "Marcos de fotos artesanales con motivos de playa" },
  { id: "papeleria", nombre: "Papelería", emoji: "✏️", total: "14", desc: "Plumas con dijes, sets escolares y de pintura para niños" },
  { id: "juguetes", nombre: "Juguetes y Juegos", emoji: "🧸", total: "11", desc: "Juegos de agua, rompecabezas de madera y juegos de mesa" },
  { id: "frascos", nombre: "Frascos y Alhajeros", emoji: "🐚", total: "6", desc: "Frascos con conchas y arena, alhajeros de madera decorados" },
  { id: "pulseras", nombre: "Pulseras", emoji: "📿", total: "3", desc: "Pulseras de conchas y de la amistad en display para mostrador" },
  { id: "ventiladores", nombre: "Ventiladores y Abanicos", emoji: "💨", total: "4", desc: "Ventiladores de mano recargables y abanicos" },
];

/* ── ARTÍCULOS ─────────────────────────────────────────────────
   Cada línea es un artículo. Campos:
     ref       → clave única (aparece en la cotización y nombra la foto)
     nombre    → nombre visible del artículo
     cat       → id de la categoría (de la lista de arriba)
     emoji     → se muestra solo si el artículo no tiene foto
     visible   → false lo oculta del catálogo sin borrarlo
     nuevo     → true muestra la etiqueta "NUEVO"       (opcional)
     destacado → true muestra la etiqueta "★ POPULAR"   (opcional)
   ────────────────────────────────────────────────────────────── */
const PRODUCTOS = [

  /* ── GORRAS Y SOMBREROS ── */
  { ref: "CT-001", nombre: "Gorro con orejas móviles rosa", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-002", nombre: "Gorro con orejas móviles amarillo", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-003", nombre: "Gorro con orejas móviles beige", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-004", nombre: "Gorro con orejas móviles azul", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-005", nombre: "Gorra de mezclilla rasgada (lateral)", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-006", nombre: "Gorra de mezclilla negra rasgada", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-007", nombre: "Gorra de mezclilla oscura rasgada", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-008", nombre: "Gorra de mezclilla celeste rasgada", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-009", nombre: "Gorra azul rey lavada", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-010", nombre: "Gorra coral lavada", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-011", nombre: "Gorra morada lavada", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-012", nombre: "Gorra azul acero lavada", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-013", nombre: "Gorra azul marino lavada", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-014", nombre: "Gorra verde bosque lavada", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-015", nombre: "Gorra naranja teja lavada", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-016", nombre: "Gorra vino lavada", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-017", nombre: "Gorra blanca clásica", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-018", nombre: "Gorra rosa clásica", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-019", nombre: "Gorra azul rey clásica", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-020", nombre: "Gorra trucker azul con frente blanco", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-021", nombre: "Gorra trucker verde militar", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-022", nombre: "Gorra trucker rosa", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-023", nombre: "Gorra trucker beige frente blanco", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-024", nombre: "Gorra trucker negra frente blanco (lateral)", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-025", nombre: "Gorra azul marino con malla", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-026", nombre: "Gorra negra visera curva", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-027", nombre: "Gorra beige con malla blanca", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-028", nombre: "Gorra negra con malla blanca", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-029", nombre: "Sombrero pescador estrellas de mar", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-030", nombre: "Sombrero pescador Shark Attack", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-031", nombre: "Sombrero pescador tortugas azules", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-032", nombre: "Gorra celeste con borde azul", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-033", nombre: "Gorra rosa pastel (lateral)", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-034", nombre: "Gorra verde menta con borde", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-035", nombre: "Gorra beige con visera café", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-036", nombre: "Sombrero pescador camel", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-037", nombre: "Sombrero pescador rojo", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-038", nombre: "Sombrero pescador negro", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-039", nombre: "Sombrero pescador blanco", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-040", nombre: "Sombrero pescador fucsia lavado", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-041", nombre: "Sombrero pescador gris lavado", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-042", nombre: "Sombrero pescador blanco (lateral)", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-043", nombre: "Sombrero pescador negro lavado", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-044", nombre: "Sombrero pescador camel lavado", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-045", nombre: "Sombrero pescador mezclilla oscura", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-046", nombre: "Gorra negra camuflaje (frontal)", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-047", nombre: "Gorra camel camuflaje", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-048", nombre: "Gorra azul marino camuflaje", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-049", nombre: "Gorra beige con malla (frontal)", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-050", nombre: "Gorra trucker azul marino malla (lateral)", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-051", nombre: "Gorra trucker negra malla", cat: "gorras", emoji: "🧢", visible: true },
  { ref: "CT-052", nombre: "Gorra trucker azul rey (lateral)", cat: "gorras", emoji: "🧢", visible: true },

  /* ── LENTES DE SOL ── */
  { ref: "CT-101", nombre: "Lentes de sol rosa palo", cat: "lentes", emoji: "🕶️", visible: true },
  { ref: "CT-102", nombre: "Lentes de sol rosa", cat: "lentes", emoji: "🕶️", visible: true },
  { ref: "CT-103", nombre: "Lentes de sol durazno", cat: "lentes", emoji: "🕶️", visible: true },
  { ref: "CT-104", nombre: "Lentes de sol rojos", cat: "lentes", emoji: "🕶️", visible: true },
  { ref: "CT-105", nombre: "Lentes de sol menta", cat: "lentes", emoji: "🕶️", visible: true },
  { ref: "CT-106", nombre: "Lentes de sol blancos (lateral)", cat: "lentes", emoji: "🕶️", visible: true },
  { ref: "CT-107", nombre: "Lentes de sol negros", cat: "lentes", emoji: "🕶️", visible: true },

  /* ── LLAVEROS ── */
  { ref: "CT-121", nombre: "Llaveros destapador tabla de surf (juego de 4)", cat: "llaveros", emoji: "🔑", visible: true },
  { ref: "CT-122", nombre: "Llaveros destapador Cancún (juego de 4)", cat: "llaveros", emoji: "🔑", visible: true },
  { ref: "CT-123", nombre: "Llaveros destapador de colores (juego de 4)", cat: "llaveros", emoji: "🔑", visible: true },
  { ref: "CT-124", nombre: "Llaveros tabla de surf (juego de 8)", cat: "llaveros", emoji: "🔑", visible: true },
  { ref: "CT-125", nombre: "Llavero placa México Cancún", cat: "llaveros", emoji: "🔑", visible: true },
  { ref: "CT-126", nombre: "Llavero corazón Costa Maya combi", cat: "llaveros", emoji: "🔑", visible: true },
  { ref: "CT-127", nombre: "Llaveros corazón Costa Maya (juego de 4)", cat: "llaveros", emoji: "🔑", visible: true },
  { ref: "CT-128", nombre: "Llaveros corazón Costa Maya (par)", cat: "llaveros", emoji: "🔑", visible: true },
  { ref: "CT-129", nombre: "Llaveros tabla boogie Costa Maya (juego de 4)", cat: "llaveros", emoji: "🔑", visible: true },
  { ref: "CT-130", nombre: "Llaveros tabla de surf atardecer (juego de 4)", cat: "llaveros", emoji: "🔑", visible: true },
  { ref: "CT-131", nombre: "Llaveros tabla de surf Costa Maya (juego de 4)", cat: "llaveros", emoji: "🔑", visible: true },
  { ref: "CT-132", nombre: "Llaveros tabla de surf playa (juego de 4)", cat: "llaveros", emoji: "🔑", visible: true },
  { ref: "CT-133", nombre: "Llaveros tortuga de colores (juego de 4)", cat: "llaveros", emoji: "🔑", visible: true },

  /* ── IMANES ── */
  { ref: "CT-141", nombre: "Imán Cancún ventana con delfín", cat: "imanes", emoji: "🧲", visible: true },
  { ref: "CT-142", nombre: "Imán letrero Beach Day", cat: "imanes", emoji: "🧲", visible: true },
  { ref: "CT-143", nombre: "Imán tortuga con letreros Cancún", cat: "imanes", emoji: "🧲", visible: true },
  { ref: "CT-144", nombre: "Imán México delfines con placa", cat: "imanes", emoji: "🧲", visible: true },
  { ref: "CT-145", nombre: "Imanes delfín tie-dye (par)", cat: "imanes", emoji: "🧲", visible: true },
  { ref: "CT-146", nombre: "Imanes geco de colores (juego de 4)", cat: "imanes", emoji: "🧲", visible: true },
  { ref: "CT-147", nombre: "Imanes de playa Cancún (juego de 3)", cat: "imanes", emoji: "🧲", visible: true },
  { ref: "CT-148", nombre: "Imán Cancún kayaks con frasco de arena", cat: "imanes", emoji: "🧲", visible: true },
  { ref: "CT-149", nombre: "Imán tortuga con frasco de arena", cat: "imanes", emoji: "🧲", visible: true },
  { ref: "CT-150", nombre: "Imán Cancún chicas en la playa", cat: "imanes", emoji: "🧲", visible: true },
  { ref: "CT-151", nombre: "Imán Cancún chicas en la playa (dorado)", cat: "imanes", emoji: "🧲", visible: true },
  { ref: "CT-152", nombre: "Imán letrero Enjoy Life Cancún", cat: "imanes", emoji: "🧲", visible: true },
  { ref: "CT-153", nombre: "Imán letrero Life is a Beach", cat: "imanes", emoji: "🧲", visible: true },
  { ref: "CT-154", nombre: "Porta-notas magnético marino", cat: "imanes", emoji: "🧲", visible: true },
  { ref: "CT-155", nombre: "Imán Costa Maya sombrilla", cat: "imanes", emoji: "🧲", visible: true },
  { ref: "CT-156", nombre: "Imán Costa Maya delfines", cat: "imanes", emoji: "🧲", visible: true },
  { ref: "CT-157", nombre: "Imanes Costa Maya (juego de 3)", cat: "imanes", emoji: "🧲", visible: true },
  { ref: "CT-158", nombre: "Imanes tortuga con tabla y palmera (par)", cat: "imanes", emoji: "🧲", visible: true },
  { ref: "CT-159", nombre: "Imanes tortuga en huevo Cancún (par)", cat: "imanes", emoji: "🧲", visible: true },

  /* ── ESFERAS DE NIEVE ── */
  { ref: "CT-161", nombre: "Esferas de nieve corona de tortugas (juego de 3)", cat: "esferas", emoji: "🔮", visible: true },
  { ref: "CT-162", nombre: "Esfera de nieve delfines Cancún", cat: "esferas", emoji: "🔮", visible: true },
  { ref: "CT-163", nombre: "Esfera de nieve delfín Cancún grande", cat: "esferas", emoji: "🔮", visible: true },
  { ref: "CT-164", nombre: "Esferas de nieve tortuga (juego de 4)", cat: "esferas", emoji: "🔮", visible: true },
  { ref: "CT-165", nombre: "Esferas de nieve tortuga (juego de 3)", cat: "esferas", emoji: "🔮", visible: true },
  { ref: "CT-166", nombre: "Esfera de nieve corona de tortugas Cancún", cat: "esferas", emoji: "🔮", visible: true },
  { ref: "CT-167", nombre: "Esfera de nieve delfines en arco", cat: "esferas", emoji: "🔮", visible: true },
  { ref: "CT-168", nombre: "Esfera de nieve tortugas sobre ola", cat: "esferas", emoji: "🔮", visible: true },
  { ref: "CT-169", nombre: "Esfera de nieve tortuga extendida Cancún", cat: "esferas", emoji: "🔮", visible: true },
  { ref: "CT-170", nombre: "Esfera de nieve tortuga Cancún", cat: "esferas", emoji: "🔮", visible: true },
  { ref: "CT-171", nombre: "Esfera de nieve delfín azul Cancún", cat: "esferas", emoji: "🔮", visible: true },
  { ref: "CT-172", nombre: "Esfera de nieve delfín nadando Cancún", cat: "esferas", emoji: "🔮", visible: true },
  { ref: "CT-173", nombre: "Esfera de nieve tortuga con aro", cat: "esferas", emoji: "🔮", visible: true },
  { ref: "CT-174", nombre: "Esfera de nieve tortuga con aro grande", cat: "esferas", emoji: "🔮", visible: true },

  /* ── FIGURAS Y DECORACIÓN ── */
  { ref: "CT-181", nombre: "Plato decorativo de playa con palmeras", cat: "figuras", emoji: "🐬", visible: true },
  { ref: "CT-182", nombre: "Barco velero decorativo velas azules", cat: "figuras", emoji: "🐬", visible: true },
  { ref: "CT-183", nombre: "Barcos veleros decorativos (par)", cat: "figuras", emoji: "🐬", visible: true },
  { ref: "CT-184", nombre: "Velero decorativo con estrella de mar", cat: "figuras", emoji: "🐬", visible: true },
  { ref: "CT-185", nombre: "Letreros de madera tabla de surf (juego de 3)", cat: "figuras", emoji: "🐬", visible: true },
  { ref: "CT-186", nombre: "Faros decorativos de madera (par)", cat: "figuras", emoji: "🐬", visible: true },
  { ref: "CT-187", nombre: "Cuadro de madera con arena y estrella", cat: "figuras", emoji: "🐬", visible: true },
  { ref: "CT-188", nombre: "Veleros de madera con rayas (juego de 4)", cat: "figuras", emoji: "🐬", visible: true },
  { ref: "CT-189", nombre: "Veleros de madera con rayas (par)", cat: "figuras", emoji: "🐬", visible: true },
  { ref: "CT-190", nombre: "Barcos pesqueros decorativos (par)", cat: "figuras", emoji: "🐬", visible: true },
  { ref: "CT-191", nombre: "Figura de delfines en ola", cat: "figuras", emoji: "🐬", visible: true },
  { ref: "CT-192", nombre: "Figura de delfín en ola", cat: "figuras", emoji: "🐬", visible: true },
  { ref: "CT-193", nombre: "Figuras de tortuga (juego de 3)", cat: "figuras", emoji: "🐬", visible: true },

  /* ── PORTARRETRATOS ── */
  { ref: "CT-201", nombre: "Portarretratos de madera con veleros (par)", cat: "portarretratos", emoji: "🖼️", visible: true },
  { ref: "CT-202", nombre: "Portarretratos Cancún azul con conchas", cat: "portarretratos", emoji: "🖼️", visible: true },
  { ref: "CT-203", nombre: "Portarretratos forma de lancha azul (par)", cat: "portarretratos", emoji: "🖼️", visible: true },
  { ref: "CT-204", nombre: "Portarretratos forma de lancha blanca (par)", cat: "portarretratos", emoji: "🖼️", visible: true },
  { ref: "CT-205", nombre: "Portarretratos verde con red y estrella", cat: "portarretratos", emoji: "🖼️", visible: true },
  { ref: "CT-206", nombre: "Portarretratos de conchas (par)", cat: "portarretratos", emoji: "🖼️", visible: true },

  /* ── PAPELERÍA ── */
  { ref: "CT-211", nombre: "Plumas gel gatito (juego de 5)", cat: "papeleria", emoji: "✏️", visible: true },
  { ref: "CT-212", nombre: "Plumas gel pastel (juego de 5)", cat: "papeleria", emoji: "✏️", visible: true },
  { ref: "CT-213", nombre: "Plumas gel pastel con brillos (juego de 5)", cat: "papeleria", emoji: "✏️", visible: true },
  { ref: "CT-214", nombre: "Plumas azules multicolor (juego de 5)", cat: "papeleria", emoji: "✏️", visible: true },
  { ref: "CT-215", nombre: "Plumas con dije de delfín (juego de 5)", cat: "papeleria", emoji: "✏️", visible: true },
  { ref: "CT-216", nombre: "Plumas con dije de mariposa (juego de 7)", cat: "papeleria", emoji: "✏️", visible: true },
  { ref: "CT-217", nombre: "Plumas flamenco de colores (juego de 8)", cat: "papeleria", emoji: "✏️", visible: true },
  { ref: "CT-218", nombre: "Plumas con dijes y dulces (juego de 8)", cat: "papeleria", emoji: "✏️", visible: true },
  { ref: "CT-219", nombre: "Set escolar Undersea World", cat: "papeleria", emoji: "✏️", visible: true },
  { ref: "CT-220", nombre: "Set de pintura infantil Undersea World", cat: "papeleria", emoji: "✏️", visible: true },
  { ref: "CT-221", nombre: "Plumas cola de sirena (juego de 8)", cat: "papeleria", emoji: "✏️", visible: true },
  { ref: "CT-222", nombre: "Plumas patita de colores (juego de 3)", cat: "papeleria", emoji: "✏️", visible: true },
  { ref: "CT-223", nombre: "Plumas cola de sirena pastel (juego de 8)", cat: "papeleria", emoji: "✏️", visible: true },
  { ref: "CT-224", nombre: "Plumas Playa del Carmen (juego de 5)", cat: "papeleria", emoji: "✏️", visible: true },

  /* ── JUGUETES Y JUEGOS ── */
  { ref: "CT-231", nombre: "Juego de mesa Ludo", cat: "juguetes", emoji: "🧸", visible: true },
  { ref: "CT-232", nombre: "Juego de mesa Serpientes y Escaleras", cat: "juguetes", emoji: "🧸", visible: true },
  { ref: "CT-233", nombre: "Juego de mesa Ajedrez", cat: "juguetes", emoji: "🧸", visible: true },
  { ref: "CT-234", nombre: "Juegos de agua unicornio (par)", cat: "juguetes", emoji: "🧸", visible: true },
  { ref: "CT-235", nombre: "Juego de agua dinosaurio", cat: "juguetes", emoji: "🧸", visible: true },
  { ref: "CT-236", nombre: "Juego de agua tiburón", cat: "juguetes", emoji: "🧸", visible: true },
  { ref: "CT-237", nombre: "Tren de madera armable", cat: "juguetes", emoji: "🧸", visible: true },
  { ref: "CT-238", nombre: "Xilófono de madera con rana", cat: "juguetes", emoji: "🧸", visible: true },
  { ref: "CT-239", nombre: "Rompecabezas de madera vaca y león (par)", cat: "juguetes", emoji: "🧸", visible: true },
  { ref: "CT-240", nombre: "Rompecabezas de madera gato y panda (par)", cat: "juguetes", emoji: "🧸", visible: true },
  { ref: "CT-241", nombre: "Sonajas de cascabel (juego de 3)", cat: "juguetes", emoji: "🧸", visible: true },

  /* ── FRASCOS Y ALHAJEROS ── */
  { ref: "CT-251", nombre: "Frascos Cozumel con conchas (par)", cat: "frascos", emoji: "🐚", visible: true },
  { ref: "CT-252", nombre: "Botellitas Playa del Carmen con arena (juego de 3)", cat: "frascos", emoji: "🐚", visible: true },
  { ref: "CT-253", nombre: "Botellas con conchas Playa del Carmen (juego)", cat: "frascos", emoji: "🐚", visible: true },
  { ref: "CT-254", nombre: "Frascos Cancún con conchas (juego de 3)", cat: "frascos", emoji: "🐚", visible: true },
  { ref: "CT-255", nombre: "Alhajeros de madera marinos (juego de 4)", cat: "frascos", emoji: "🐚", visible: true },
  { ref: "CT-256", nombre: "Alhajeros Cancún decorados (juego de 4)", cat: "frascos", emoji: "🐚", visible: true },

  /* ── PULSERAS ── */
  { ref: "CT-261", nombre: "Pulseras de conchas y tortuga (display de 12)", cat: "pulseras", emoji: "📿", visible: true },
  { ref: "CT-262", nombre: "Pulseras de perlas y conchas (display de 12)", cat: "pulseras", emoji: "📿", visible: true },
  { ref: "CT-263", nombre: "Pulseras Best Friend de colores (display de 12)", cat: "pulseras", emoji: "📿", visible: true },

  /* ── VENTILADORES Y ABANICOS ── */
  { ref: "CT-271", nombre: "Ventilador de mano recargable verde", cat: "ventiladores", emoji: "💨", visible: true },
  { ref: "CT-272", nombre: "Ventilador de mano con estuche morado", cat: "ventiladores", emoji: "💨", visible: true },
  { ref: "CT-273", nombre: "Mini ventilador de bolsillo lila", cat: "ventiladores", emoji: "💨", visible: true },
  { ref: "CT-274", nombre: "Abanico de madera animal print", cat: "ventiladores", emoji: "💨", visible: true },


  /* ── PARA AGREGAR UN ARTÍCULO NUEVO copia esta línea, quítale las
       barras del inicio y cambia los datos: ─────────────────────
  { ref: "CT-XXX", nombre: "Nombre del artículo", cat: "gorras", emoji: "🧢", visible: true },
  ─────────────────────────────────────────────────────────────── */
];
