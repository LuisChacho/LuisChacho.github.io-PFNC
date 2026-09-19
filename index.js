// BANCO DE 40 PREGUNTAS EXACTAS SOBRE DESPEJES DE FÓRMULAS (FÍSICA Y MATEMÁTICA)
const questionsData = [
    // --- BLOQUE 1: DESPEJES EN FÍSICA CLÁSICA Y CINEMÁTICA (14 PREGUNTAS) ---
    { 
        id: 1, topic: "Cinemática - MRUV", 
        text: "Dada la ecuación de itinerario de la posición: $$d = v_0 t + \\frac{1}{2} a t^2$$, despeje la aceleración ($a$):", 
        options: ["$$a = \\frac{2(d - v_0 t)}{t^2}$$", "$$a = \\frac{d - v_0 t}{t^2}$$", "$$a = \\frac{2d - v_0}{t^2}$$", "$$a = \\frac{d - 2v_0 t}{2t^2}$$"], 
        correct: 0,
        explanation: "1. Restamos $v_0 t$ en ambos lados: $d - v_0 t = \\frac{1}{2} a t^2$. <br>2. Multiplicamos por 2: $2(d - v_0 t) = a t^2$. <br>3. Dividimos entre $t^2$: $a = \\frac{2(d - v_0 t)}{t^2}$."
    },
    { 
        id: 2, topic: "Cinemática - Velocidad Final", 
        text: "A partir de la ecuación independiente del tiempo: $$v_f^2 = v_0^2 + 2ad$$, despeje la distancia ($d$):", 
        options: ["$$d = \\frac{v_f^2 - v_0^2}{2a}$$", "$$d = \\frac{2(v_f^2 - v_0^2)}{a}$$", "$$d = \\frac{v_f - v_0}{2a}$$", "$$d = \\frac{v_f^2 + v_0^2}{2a}$$"], 
        correct: 0,
        explanation: "1. Pasamos $v_0^2$ restando: $v_f^2 - v_0^2 = 2ad$. <br>2. Despejamos $d$ dividiendo por $2a$: $d = \\frac{v_f^2 - v_0^2}{2a}$."
    },
    { 
        id: 3, topic: "Cinemática - Velocidad Media", 
        text: "Dada la fórmula de velocidad media o promedio: $$v_m = \\frac{v_f + v_0}{2}$$, despeje la velocidad final ($v_f$):", 
        options: ["$$v_f = 2v_m - v_0$$", "$$v_f = \\frac{v_m - v_0}{2}$$", "$$v_f = 2(v_m + v_0)$$", "$$v_f = v_m - 2v_0$$"], 
        correct: 0,
        explanation: "1. Multiplicamos por 2: $2v_m = v_f + v_0$. <br>2. Restamos $v_0$: $v_f = 2v_m - v_0$."
    },
    { 
        id: 4, topic: "Dinámica - Segunda Ley de Newton", 
        text: "Considerando la fuerza de fricción y la segunda ley: $$F - f_r = m \\cdot a$$, despeje la masa ($m$):", 
        options: ["$$m = \\frac{F - f_r}{a}$$", "$$m = \\frac{F + f_r}{a}$$", "$$m = \\frac{a}{F - f_r}$$", "$$m = \\frac{F}{a} - f_r$$"], 
        correct: 0,
        explanation: "1. El término $(F - f_r)$ actúa como la fuerza neta $F_n$. <br>2. Dividiendo entre la aceleración $a$ se obtiene $m = \\frac{F - f_r}{a}$."
    },
    { 
        id: 5, topic: "Dinámica - Fuerza Gravitacional", 
        text: "De la ley de gravitación universal: $$F = G \\frac{m_1 m_2}{r^2}$$, despeje la distancia entre masas ($r$):", 
        options: ["$$r = \\sqrt{\\frac{G m_1 m_2}{F}}$$", "$$r = \\frac{G m_1 m_2}{F^2}$$", "$$r = \\sqrt{\\frac{F}{G m_1 m_2}}$$", "$$r = \\frac{\\sqrt{G m_1 m_2}}{F}$$"], 
        correct: 0,
        explanation: "1. Intercambiamos $r^2$ y $F$: $r^2 = \\frac{G m_1 m_2}{F}$. <br>2. Aplicamos raíz cuadrada: $r = \\sqrt{\\frac{G m_1 m_2}{F}}$."
    },
    { 
        id: 6, topic: "Trabajo y Energía - Energía Cinética", 
        text: "Dada la fórmula de la energía cinética: $$E_k = \\frac{1}{2} m v^2$$, despeje la velocidad ($v$):", 
        options: ["$$v = \\sqrt{\\frac{2E_k}{m}}$$", "$$v = \\frac{\\sqrt{E_k}}{2m}$$", "$$v = \\frac{2E_k}{m}$$", "$$v = \\sqrt{\\frac{E_k}{2m}}$$"], 
        correct: 0,
        explanation: "1. Multiplicamos por 2: $2E_k = m v^2$. <br>2. Dividimos entre $m$: $v^2 = \\frac{2E_k}{m}$. <br>3. Aplicamos raíz: $v = \\sqrt{\\frac{2E_k}{m}}$."
    },
    { 
        id: 7, topic: "Trabajo y Energía - Energía Potencial", 
        text: "En la expresión de energía potencial gravitatoria: $$E_p = mgh$$, despeje la altura ($h$):", 
        options: ["$$h = \\frac{E_p}{mg}$$", "$$h = \\frac{mg}{E_p}$$", "$$h = E_p - mg$$", "$$h = \\frac{E_p}{m} - g$$"], 
        correct: 0,
        explanation: "1. Como $mg$ multiplica a $h$, pasa al otro lado dividiendo: $h = \\frac{E_p}{mg}$."
    },
    { 
        id: 8, topic: "Trabajo, Potencia y Energía", 
        text: "Dado que la potencia se define como el trabajo sobre el tiempo ($P = \\frac{W}{t}$) y el trabajo es $W = F \\cdot d \\cdot \\cos(\\theta)$, despeje la fuerza ($F$):", 
        options: ["$$F = \\frac{P \\cdot t}{d \\cdot \\cos(\\theta)}$$", "$$F = \\frac{P \\cdot d}{t \\cdot \\cos(\\theta)}$$", "$$F = \\frac{d \\cdot \\cos(\\theta)}{P \\cdot t}$$", "$$F = P \\cdot t \\cdot d \\cdot \\cos(\\theta)$$"], 
        correct: 0,
        explanation: "1. Sustituyendo $W$: $P = \\frac{F \\cdot d \\cdot \\cos(\\theta)}{t}$. <br>2. Despejando $F$: $F = \\frac{P \\cdot t}{d \\cdot \\cos(\\theta)}$."
    },
    { 
        id: 9, topic: "Termodinámica - Ley de Gases Ideales", 
        text: "De la ecuación de estado de los gases ideales: $$P V = n R T$$, despeje la temperatura absoluta ($T$):", 
        options: ["$$T = \\frac{P V}{n R}$$", "$$T = \\frac{n R}{P V}$$", "$$T = P V n R$$", "$$T = \\frac{P}{V n R}$$"], 
        correct: 0,
        explanation: "1. El producto $n R$ multiplica a $T$. <br>2. Pasan dividiendo al miembro izquierdo: $T = \\frac{P V}{n R}$."
    },
    { 
        id: 10, topic: "Termodinámica - Dilatación Térmica", 
        text: "En la fórmula de dilatación lineal: $$L_f = L_0 (1 + \\alpha \\Delta T)$$, despeje el coeficiente de dilatación ($\\alpha$):", 
        options: ["$$\\alpha = \\frac{L_f - L_0}{L_0 \\Delta T}$$", "$$$\\alpha = \\frac{L_f}{L_0 \\Delta T}$$", "$$$\\alpha = \\frac{L_0 \\Delta T}{L_f - L_0}$$", "$$$\\alpha = \\frac{L_f - L_0}{\\Delta T}$$"], 
        correct: 0,
        explanation: "1. Dividimos entre $L_0$: $\\frac{L_f}{L_0} = 1 + \\alpha \\Delta T$. <br>2. Restamos 1: $\\frac{L_f}{L_0} - 1 = \\frac{L_f - L_0}{L_0} = \\alpha \\Delta T$. <br>3. Dividimos entre $\\Delta T$."
    },
    { 
        id: 11, topic: "Electromagnetismo - Ley de Ohm", 
        text: "Dada la relación de potencia eléctrica basada en la Ley de Ohm: $$P = \\frac{V^2}{R}$$, despeje el voltaje ($V$):", 
        options: ["$$V = \\sqrt{P \\cdot R}$$", "$$V = \\frac{P}{R}$$", "$$V = P \\cdot R^2$$", "$$V = \\frac{\\sqrt{P}}{R}$$"], 
        correct: 0,
        explanation: "1. Multiplicamos por $R$: $P \\cdot R = V^2$. <br>2. Aplicamos raíz cuadrada: $V = \\sqrt{P \\cdot R}$."
    },
    { 
        id: 12, topic: "Electromagnetismo - Resistencias en Paralelo", 
        text: "Para dos resistencias en paralelo se cumple: $$\\frac{1}{R_t} = \\frac{1}{R_1} + \\frac{1}{R_2}$$, despeje la resistencia total ($R_t$):", 
        options: ["$$R_t = \\frac{R_1 R_2}{R_1 + R_2}$$", "$$R_t = R_1 + R_2$$", "$$R_t = \\frac{R_1 + R_2}{R_1 R_2}$$", "$$R_t = \\sqrt{R_1 R_2}$$"], 
        correct: 0,
        explanation: "1. Sumamos fracciones del miembro derecho: $\\frac{1}{R_t} = \\frac{R_2 + R_1}{R_1 R_2}$. <br>2. Invertimos ambos lados: $R_t = \\frac{R_1 R_2}{R_1 + R_2}$."
    },
    { 
        id: 13, topic: "Ondas y Acústica - Frecuencia y Periodo", 
        text: "Dada la fórmula del efecto Doppler o velocidad de propagación $$v = \\lambda \\cdot f$$ combinada con $f = \\frac{1}{T}$, despeje la longitud de onda ($\\lambda$):", 
        options: ["$$\\lambda = \\frac{v}{f}$$", "$$$\\lambda = v \\cdot f$$", "$$","$$\\lambda = \\frac{f}{v}$$", "$$$\\lambda = v - f$$"], 
        correct: 0,
        explanation: "1. De $v = \\lambda \\cdot f$, como $f$ multiplica a $\\lambda$, pasa dividiendo: $\\lambda = \\frac{v}{f}$."
    },
    { 
        id: 14, topic: "Hidrostática - Principio de Arquímedes", 
        text: "En la presión hidrostática y empuje: $$E = \\rho_1 g V_{sum}$$ donde $\\rho_1$ es densidad del líquido, despeje el volumen sumergido ($V_{sum}$):", 
        options: ["$$V_{sum} = \\frac{E}{\\rho_1 g}$$", "$$V_{sum} = E \\cdot \\rho_1 g$$", "$$V_{sum} = \\frac{\\rho_1 g}{E}$$", "$$V_{sum} = \\frac{E}{g} - \\rho_1$$"], 
        correct: 0,
        explanation: "1. El término $(\\rho_1 g)$ multiplica al volumen. <br>2. Pasa dividiendo: $V_{sum} = \\frac{E}{\\rho_1 g}$."
    },

    // --- BLOQUE 2: DESPEJES EN ÁLGEBRA Y FUNCIONES MATEMÁTICAS (14 PREGUNTAS) ---
    { 
        id: 15, topic: "Álgebra - Ecuación Exponencial", 
        text: "Dada la función de crecimiento exponencial $$P(t) = P_0 e^{kt}$$, despeje el tiempo ($t$):", 
        options: ["$$t = \\frac{\\ln(P / P_0)}{k}$$", "$$t = \\frac{\\ln(P_0 / P)}{k}$$", "$$t = \\frac{P}{P_0 k}$$", "$$t = \\ln\\left(\\frac{P}{P_0 k}\\right)$$"], 
        correct: 0,
        explanation: "1. Dividimos entre $P_0$: $\\frac{P}{P_0} = e^{kt}$. <br>2. Aplicamos logaritmo natural: $\\ln(P/P_0) = kt$. <br>3. Despejamos $t$: $t = \\frac{\\ln(P/P_0)}{k}$."
    },
    { 
        id: 16, topic: "Álgebra - Cambio de Base Logarítmica", 
        text: "Dada la expresión logarítmica $$y = \\log_b(x)$$, despeje el argumento ($x$):", 
        options: ["$$x = b^y$$", "$$x = y^b$$", "$$x = b \\cdot y$$", "$$x = \\frac{y}{b}$$"], 
        correct: 0,
        explanation: "Por definición de logaritmo, la base elevada al resultado da el argumento: $x = b^y$."
    },
    { 
        id: 17, topic: "Álgebra - Ecuación Cuadrática General", 
        text: "Dada la fórmula general de la ecuación cuadrática $ax^2 + bx + c = 0$, despeje $x$ mediante la fórmula resolvente:", 
        options: ["$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$", "$$x = \\frac{b \\pm \\sqrt{b^2 + 4ac}}{a}$$", "$$x = \\frac{-b \\pm \\sqrt{4ac - b^2}}{2a}$$", "$$x = \\frac{-2b \\pm \\sqrt{b^2 - 4ac}}{a}$$"], 
        correct: 0,
        explanation: "Es la fórmula cuadrática estándar derivada por completación de trinomio cuadrado perfecto."
    },
    { 
        id: 18, topic: "Trigonometría - Ley de Senos", 
        text: "Dada la Ley de Senos en un triángulo: $$\\frac{a}{\\sin(A)} = \\frac{b}{\\sin(B)}$$, despeje el seno del ángulo $B$ ($\\sin(B)$):", 
        options: ["$$\\sin(B) = \\frac{b \\cdot \\sin(A)}{a}$$", "$$$\\sin(B) = \\frac{a \\cdot \\sin(A)}{b}$$", "$$$\\sin(B) = \\frac{a \\cdot b}{\\sin(A)}$$", "$$$\\sin(B) = \\frac{\\sin(A)}{a \\cdot b}$$"], 
        correct: 0,
        explanation: "1. Multiplicamos en cruz: $a \\cdot \\sin(B) = b \\cdot \\sin(A)$. <br>2. Dividimos entre $a$: $\\sin(B) = \\frac{b \\cdot \\sin(A)}{a}$."
    },
    { 
        id: 19, topic: "Trigonometría - Ley de Cosenos", 
        text: "En la Ley de Cosenos: $$c^2 = a^2 + b^2 - 2ab \\cos(C)$$, despeje el coseno del ángulo $C$ ($\\cos(C)$):", 
        options: ["$$\\cos(C) = \\frac{a^2 + b^2 - c^2}{2ab}$$", "$$","$$\\cos(C) = \\frac{c^2 - a^2 - b^2}{ab}$$", "$$","$$\\cos(C) = \\frac{2ab}{a^2 + b^2 - c^2}$$", "$$","$$\\cos(C) = \\frac{a^2 + b^2 + c^2}{2ab}$$"], 
        correct: 0,
        explanation: "1. Pasamos $2ab \\cos(C)$ sumando y $c^2$ restando: $2ab \\cos(C) = a^2 + b^2 - c^2$. <br>2. Dividimos entre $2ab$."
    },
    { 
        id: 20, topic: "Geometría Analítica - Ecuación de la Recta", 
        text: "Dada la ecuación punto-pendiente de la recta: $$y - y_1 = m(x - x_1)$$, despeje la pendiente ($m$):", 
        options: ["$$m = \\frac{y - y_1}{x - x_1}$$", "$$m = \\frac{x - x_1}{y - y_1}$$", "$$m = (y - y_1)(x - x_1)$$", "$$m = y - y_1 - x + x_1$$"], 
        correct: 0,
        explanation: "1. Como $(x - x_1)$ multiplica a $m$, pasa dividiendo al otro miembro: $m = \\frac{y - y_1}{x - x_1}$."
    },
    { 
        id: 21, topic: "Geometría Analítica - Circunferencia", 
        text: "Dada la ecuación canónica de la circunferencia: $$(x - h)^2 + (y - k)^2 = r^2$$, despeje el radio ($r$):", 
        options: ["$$r = \\sqrt{(x - h)^2 + (y - k)^2}$$", "$$r = (x - h) + (y - k)$$", "$$r = \\sqrt{x^2 + y^2 - h - k}$$", "$$r = \\frac{(x - h)^2 + (y - k)^2}{2}$$"], 
        correct: 0,
        explanation: "Aplicando raíz cuadrada directamente a ambos miembros: $r = \\sqrt{(x - h)^2 + (y - k)^2}$."
    },
    { 
        id: 22, topic: "Geometría del Espacio - Cono", 
        text: "Dada la fórmula del volumen de un cono: $$V = \\frac{1}{3} \\pi r^2 h$$, despeje el radio de la base ($r$):", 
        options: ["$$r = \\sqrt{\\frac{3V}{\\pi h}}$$", "$$r = \\frac{3V}{\\pi h}$$", "$$r = \\sqrt{\\frac{V}{3\\pi h}}$$", "$$r = \\frac{\\sqrt{3V}}{\\pi h}$$"], 
        correct: 0,
        explanation: "1. Multiplicamos por 3: $3V = \\pi r^2 h$. <br>2. Dividimos entre $\\pi h$: $r^2 = \\frac{3V}{\\pi h}$. <br>3. Aplicamos raíz."
    },
    { 
        id: 23, topic: "Geometría del Espacio - Esfera", 
        text: "En la fórmula del área superficial de una esfera: $$A = 4 \\pi r^2$$, despeje el radio ($r$):", 
        options: ["$$r = \\sqrt{\\frac{A}{4\\pi}}$$", "$$r = \\frac{A}{2\\pi}$$", "$$r = \\sqrt{\\frac{4\\pi}{A}}$$", "$$r = \\frac{\\sqrt{A}}{4\\pi}$$"], 
        correct: 0,
        explanation: "1. Dividimos entre $4\\pi$: $r^2 = \\frac{A}{4\\pi}$. <br>2. Aplicamos raíz cuadrada."
    },
    { 
        id: 24, topic: "Progresiones - Suma Aritmética", 
        text: "Dada la suma de una progresión aritmética: $$S_n = \\frac{n}{2} (a_1 + a_n)$$, despeje el número de términos ($n$):", 
        options: ["$$n = \\frac{2S_n}{a_1 + a_n}$$", "$$n = \\frac{S_n}{2(a_1 + a_n)}$$", "$$n = \\frac{a_1 + a_n}{2S_n}$$", "$$n = \\frac{S_n}{a_1 + a_n}$$"], 
        correct: 0,
        explanation: "1. Multiplicamos por 2: $2S_n = n(a_1 + a_n)$. <br>2. Dividimos entre $(a_1 + a_n)$."
    },
    { 
        id: 25, topic: "Estadística - Desviación Estándar", 
        text: "Dada la varianza muestral: $$s^2 = \\frac{\\sum (x_i - \\bar{x})^2}{n - 1}$$, despeje el tamaño muestral menos uno ($n - 1$):", 
        options: ["$$n - 1 = \\frac{\\sum (x_i - \\bar{x})^2}{s^2}$$", "$$n - 1 = s^2 \\cdot \\sum (x_i - \\bar{x})^2$$", "$$n - 1 = \\frac{s^2}{\\sum (x_i - \\bar{x})^2}$$", "$$n - 1 = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{s^2}}$$"], 
        correct: 0,
        explanation: "Intercambiamos de posición $s^2$ y $(n - 1)$ en la división."
    },
    { 
        id: 26, topic: "Álgebra - Cambio de Variable", 
        text: "Dada la relación de conversión de temperatura: $$C = \\frac{5}{9}(F - 32)$$, despeje la temperatura en Fahrenheit ($F$):", 
        options: ["$$F = \\frac{9}{5}C + 32$$", "$$F = \\frac{5}{9}C - 32$$", "$$F = \\frac{9C + 32}{5}$$", "$$F = \\frac{9}{5}(C + 32)$$"], 
        correct: 0,
        explanation: "1. Multiplicamos por $\\frac{9}{5}$: $\\frac{9}{5}C = F - 32$. <br>2. Sumamos 32: $F = \\frac{9}{5}C + 32$."
    },
    { 
        id: 27, topic: "Funciones - Composición e Inversa", 
        text: "Dada la función lineal invertibles $y = mx + b$, despeje la variable independiente ($x$):", 
        options: ["$$x = \\frac{y - b}{m}$$", "$$x = \\frac{y + b}{m}$$", "$$x = \\frac{m}{y - b}$$", "$$x = \\frac{y}{m} - b$$"], 
        correct: 0,
        explanation: "1. Restamos $b$: $y - b = mx$. <br>2. Dividimos entre $m$: $x = \\frac{y - b}{m}$."
    },
    { 
        id: 28, topic: "Álgebra - Radicales", 
        text: "Dada la ecuación con radicales $$y = \\sqrt{ax + b}$$, despeje la variable $x$:", 
        options: ["$$x = \\frac{y^2 - b}{a}$$", "$$x = \\frac{y^2 + b}{a}$$", "$$x = \\frac{(y - b)^2}{a}$$", "$$x = y^2 - \\frac{b}{a}$$"], 
        correct: 0,
        explanation: "1. Elevamos al cuadrado: $y^2 = ax + b$. <br>2. Restamos $b$: $y^2 - b = ax$. <br>3. Dividimos entre $a$."
    },

    // --- BLOQUE 3: RAZONAMIENTO NUMÉRICO Y APLICACIONES MIXTAS (12 PREGUNTAS) ---
    { 
        id: 29, topic: "Razonamiento - Fracciones Continuas", 
        text: "Si se cumple la proporción $$\\frac{x + y}{y} = k$$, despeje la razón $x/y$:", 
        options: ["$$\\frac{x}{y} = k - 1$$", "$$\\frac{x}{y} = k + 1$$", "$$\\frac{x}{y} = \\frac{k}{1 - k}$$", "$$\\frac{x}{y} = 1 - k$$"], 
        correct: 0,
        explanation: "1. Separamos la fracción: $\\frac{x}{y} + \\frac{y}{y} = k \\implies \\frac{x}{y} + 1 = k$. <br>2. Restamos 1: $\\frac{x}{y} = k - 1$."
    },
    { 
        id: 30, topic: "Razonamiento - Interés Simple", 
        text: "Dada la fórmula de interés simple $I = C \\cdot i \\cdot t$, despeje la tasa de interés ($i$):", 
        options: ["$$i = \\frac{I}{C \\cdot t}$$", "$$i = \\frac{C \\cdot t}{I}$$", "$$i = I - C - t$$", "$$i = \\frac{I \\cdot t}{C}$$"], 
        correct: 0,
        explanation: "El producto $C \\cdot t$ multiplica a $i$, por lo que pasa dividiendo: $i = \\frac{I}{C \\cdot t}$."
    },
    { 
        id: 31, topic: "Razonamiento - Interés Compuesto", 
        text: "En la fórmula de monto con interés compuesto $M = C(1 + i)^n$, despeje el capital inicial ($C$):", 
        options: ["$$C = \\frac{M}{(1 + i)^n}$$", "$$C = M(1 + i)^n$$", "$$C = \\frac{(1 + i)^n}{M}$$", "$$C = M - (1 + i)^n$$"], 
        correct: 0,
        explanation: "El binomio $(1 + i)^n$ multiplica al capital $C$, pasa dividiendo: $C = \\frac{M}{(1 + i)^n}$."
    },
    { 
        id: 32, topic: "Razonamiento - Mezclas y Aleaciones", 
        text: "Dada la concentración de una mezcla $C_m = \\frac{m_1 c_1 + m_2 c_2}{m_1 + m_2}$, despeje la masa $m_1$ si se conoce todo lo demás:", 
        options: ["$$m_1 = \\frac{m_2(c_2 - C_m)}{C_m - c_1}$$", "$$m_1 = \\frac{m_2(C_m - c_1)}{c_2 - C_m}$$", "$$m_1 = \\frac{m_2 c_2}{m_2 + c_1}$$", "$$m_1 = m_2 \\cdot \\frac{c_1 + c_2}{C_m}$$"], 
        correct: 0,
        explanation: "1. Multiplicamos por $(m_1 + m_2)$: $C_m m_1 + C_m m_2 = m_1 c_1 + m_2 c_2$. <br>2. Agrupamos términos con $m_1$ a un lado y factorizamos."
    },
    { 
        id: 33, topic: "Razonamiento - Velocidad Promedio", 
        text: "Para un recorrido con dos tramos a velocidades $v_1$ y $v_2$, la velocidad armónica media es $v_{prom} = \\frac{2 v_1 v_2}{v_1 + v_2}$. Despeje $v_1$:", 
        options: ["$$v_1 = \\frac{v_{prom} v_2}{2v_2 - v_{prom}}$$", "$$v_1 = \\frac{2v_{prom} v_2}{v_2 - v_{prom}}$$", "$$v_1 = \\frac{v_2}{2 - v_{prom}}$$", "$$v_1 = v_{prom} - v_2$$"], 
        correct: 0,
        explanation: "1. Multiplicamos por $(v_1 + v_2)$: $v_{prom}v_1 + v_{prom}v_2 = 2v_1 v_2$. <br>2. Despejamos factor común $v_1$."
    },
    { 
        id: 34, topic: "Razonamiento - Trabajo en Equipo", 
        text: "En problemas de trabajo conjunto, si $\\frac{1}{t_1} + \\frac{1}{t_2} = \\frac{1}{T}$, despeje el tiempo total $T$:", 
        options: ["$$T = \\frac{t_1 t_2}{t_1 + t_2}$$", "$$T = t_1 + t_2$$", "$$T = \\frac{t_1 + t_2}{t_1 t_2}$$", "$$T = \\sqrt{t_1 t_2}$$"], 
        correct: 0,
        explanation: "1. Sumamos las fracciones del lado izquierdo: $\\frac{t_2 + t_1}{t_1 t_2} = \\frac{1}{T}$. <br>2. Invertimos ambos miembros."
    },
    { 
        id: 35, topic: "Razonamiento - Caída Libre", 
        text: "En la ecuación de caída libre $h = \\frac{1}{2}gt^2$, despeje el tiempo $t$:", 
        options: ["$$t = \\sqrt{\\frac{2h}{g}}$$", "$$t = \\frac{2h}{g}$$", "$$t = \\sqrt{\\frac{h}{2g}}$$", "$$t = \\frac{h}{2g}$$"], 
        correct: 0,
        explanation: "1. Multiplicamos por 2: $2h = gt^2$. <br>2. Dividimos entre $g$: $t^2 = \\frac{2h}{g}$. <br>3. Raíz cuadrada."
    },
    { 
        id: 36, topic: "Razonamiento - Presión Hidrostática", 
        text: "Dada la presión total absoluta $P = P_0 + \\rho g h$, despeje la profundidad $h$:", 
        options: ["$$h = \\frac{P - P_0}{\\rho g}$$", "$$h = \\frac{P + P_0}{\\rho g}$$", "$$h = \\frac{\\rho g}{P - P_0}$$", "$$h = P - P_0 - \\rho g$$"], 
        correct: 0,
        explanation: "1. Restamos la presión atmosférica $P_0$: $P - P_0 = \\rho g h$. <br>2. Dividimos entre $\\rho g$."
    },
    { 
        id: 37, topic: "Razonamiento - Teorema de Pitágoras", 
        text: "En el triángulo rectángulo $c^2 = a^2 + b^2$, despeje el cateto $a$:", 
        options: ["$$a = \\sqrt{c^2 - b^2}$$", "$$a = c - b$$", "$$a = \\sqrt{c^2 + b^2}$$", "$$a = c^2 - b^2$$"], 
        correct: 0,
        explanation: "1. Pasamos $b^2$ restando: $c^2 - b^2 = a^2$. <br>2. Aplicamos raíz cuadrada."
    },
    { 
        id: 38, topic: "Razonamiento - Perímetro y Área", 
        text: "Dada la fórmula del área de un trapecio $A = \\frac{(B + b) \\cdot h}{2}$, despeje la base mayor $B$:", 
        options: ["$$B = \\frac{2A}{h} - b$$", "$$B = \\frac{A}{2h} + b$$", "$$B = \\frac{2A - b}{h}$$", "$$B = \\frac{A - bh}{2}$$"], 
        correct: 0,
        explanation: "1. Multiplicamos por 2: $2A = (B + b)h$. <br>2. Dividimos entre $h$: $\\frac{2A}{h} = B + b$. <br>3. Restamos $b$."
    },
    { 
        id: 39, topic: "Razonamiento - Densidad de Población", 
        text: "Dada la densidad poblacional $D = \\frac{Población (N)}{Área (S)}$, despeje el Área ($S$):", 
        options: ["$$S = \\frac{N}{D}$$", "$$S = N \\cdot D$$", "$$S = \\frac{D}{N}$$", "$$S = N - D$$"], 
        correct: 0,
        explanation: "Intercambiamos $S$ y $D$ mediante producto cruzado: $S = \\frac{N}{D}$."
    },
    { 
        id: 40, topic: "Razonamiento - Escalas y Mapas", 
        text: "En la proporción de escalas $E = \\frac{d_{mapa}}{d_{real}}$, despeje la distancia real ($d_{real}$):", 
        options: ["$$d_{real} = \\frac{d_{mapa}}{E}$$", "$$d_{real} = d_{mapa} \\cdot E$$", "$$d_{real} = \\frac{E}{d_{mapa}}$$", "$$d_{real} = d_{mapa} - E$$"], 
        correct: 0,
        explanation: "Intercambiamos $d_{real}$ y $E$: $d_{real} = \\frac{d_{mapa}}{E}$."
    }
];

// TIEMPO CONFIGURADO: 80 minutos = 4800 segundos
const TOTAL_TIME = 80 * 60; 
const STORAGE_KEY = "EVAL_DESPEJES_PRO_STATE";

let state = {
    user: { name: '', id: '' },
    currentIndex: 0,
    answers: {},
    timeLeft: TOTAL_TIME,
    infractions: 0,
    isStarted: false,
    isFinished: false,
    completedDate: ''
};

let timerInterval = null;

window.addEventListener('DOMContentLoaded', () => {
    loadState();
    if (state.isStarted) {
        document.getElementById('fullscreen-overlay').style.display = 'none';
        if (state.user.name) {
            document.getElementById('user-display').textContent = `${state.user.name} (${state.user.id})`;
        }
        renderGrid();
        renderQuestion();
        startTimer();
    }
    setupSecurity();
    setupEventListeners();
});

function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            state = JSON.parse(saved);
            if (state.isFinished) {
                showResultsScreen();
            }
        } catch (e) {
            console.error(e);
        }
    }
}

function initExam() {
    const nameInput = document.getElementById('student-name').value;
    const idInput = document.getElementById('student-id').value;

    if (!nameInput || !idInput) return;

    state.user.name = nameInput;
    state.user.id = idInput;
    state.isStarted = true;
    saveState();

    document.getElementById('user-display').textContent = `${nameInput} (${idInput})`;

    const elem = document.documentElement;
    if (elem.requestFullscreen) elem.requestFullscreen().catch(() => {});

    document.getElementById('fullscreen-overlay').style.display = 'none';
    renderGrid();
    renderQuestion();
    startTimer();
}

function setupEventListeners() {
    document.getElementById('btn-prev').addEventListener('click', () => navigate(-1));
    document.getElementById('btn-next').addEventListener('click', () => navigate(1));
    document.getElementById('btn-finish-exam').addEventListener('click', confirmFinish);
}

function setupSecurity() {
    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement && state.isStarted && !state.isFinished) {
            document.getElementById('fullscreen-overlay').style.display = 'flex';
            registerInfraction("Salida de Pantalla Completa");
        }
    });

    window.addEventListener('visibilitychange', () => {
        if (document.hidden && state.isStarted && !state.isFinished) {
            registerInfraction("Cambio de Pestaña detectado");
        }
    });

    window.addEventListener('blur', () => {
        if (state.isStarted && !state.isFinished) {
            registerInfraction("Pérdida de foco en la ventana");
        }
    });

    document.addEventListener('contextmenu', e => e.preventDefault());

    document.addEventListener('keydown', e => {
        if (
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
            (e.ctrlKey && (e.key === 'c' || e.key === 'v' || e.key === 'u' || e.key === 's' || e.key === 'a')) ||
            e.key === 'PrintScreen'
        ) {
            e.preventDefault();
            registerInfraction("Intento de uso de atajo de teclado restringido");
        }
    });
}

function registerInfraction(reason) {
    if (state.isFinished) return;

    state.infractions++;
    saveState();

    document.getElementById('infraction-count').textContent = state.infractions;
    const banner = document.getElementById('infraction-banner');
    banner.style.display = 'block';

    if (state.infractions >= 3) {
        alert("Límite de 3 infracciones de seguridad alcanzado. La evaluación se enviará de forma automática.");
        finishExam();
    }
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (state.isFinished) return;

        if (state.timeLeft > 0) {
            state.timeLeft--;
            saveState();
            updateTimerUI();
        } else {
            clearInterval(timerInterval);
            finishExam();
        }
    }, 1000);
}

function updateTimerUI() {
    const minutes = Math.floor(state.timeLeft / 60);
    const seconds = state.timeLeft % 60;
    const timerEl = document.getElementById('timer');
    const badgeEl = document.getElementById('timer-display');
    
    timerEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (state.timeLeft <= 600) {
        badgeEl.classList.add('timer-warning');
    }
}

function renderQuestion() {
    const q = questionsData[state.currentIndex];
    document.getElementById('question-number').textContent = `Pregunta ${String(state.currentIndex + 1).padStart(2, '0')} de ${questionsData.length}`;
    document.getElementById('question-topic').textContent = `Tema: ${q.topic}`;
    document.getElementById('question-text').innerHTML = q.text;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((optText, index) => {
        const isSelected = state.answers[q.id] === index;
        const optDiv = document.createElement('div');
        optDiv.className = `option-item ${isSelected ? 'selected' : ''}`;
        optDiv.onclick = () => selectOption(q.id, index);

        optDiv.innerHTML = `
            <div class="option-prefix">${letters[index]}</div>
            <div class="option-content">${optText}</div>
        `;
        optionsContainer.appendChild(optDiv);
    });

    document.getElementById('btn-prev').disabled = state.currentIndex === 0;
    document.getElementById('btn-next').disabled = state.currentIndex === questionsData.length - 1;

    updateProgress();
    updateGridUI();

    if (window.renderMathInElement) {
        renderMathInElement(document.getElementById('question-text'), { delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}] });
        renderMathInElement(optionsContainer, { delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}] });
    }
}

function selectOption(qId, optionIndex) {
    state.answers[qId] = optionIndex;
    saveState();
    renderQuestion();
}

function navigate(dir) {
    const newIndex = state.currentIndex + dir;
    if (newIndex >= 0 && newIndex < questionsData.length) {
        state.currentIndex = newIndex;
        saveState();
        renderQuestion();
    }
}

function jumpToQuestion(index) {
    state.currentIndex = index;
    saveState();
    renderQuestion();
}

function renderGrid() {
    const grid = document.getElementById('reactive-grid');
    grid.innerHTML = '';
    questionsData.forEach((q, idx) => {
        const item = document.createElement('div');
        item.className = 'grid-item';
        item.id = `grid-item-${idx}`;
        item.textContent = idx + 1;
        item.onclick = () => jumpToQuestion(idx);
        grid.appendChild(item);
    });
}

function updateGridUI() {
    questionsData.forEach((q, idx) => {
        const item = document.getElementById(`grid-item-${idx}`);
        if (!item) return;
        item.className = 'grid-item';
        if (idx === state.currentIndex) item.classList.add('active');
        if (state.answers[q.id] !== undefined) item.classList.add('answered');
    });
}

function updateProgress() {
    const answeredCount = Object.keys(state.answers).length;
    const pct = Math.round((answeredCount / questionsData.length) * 100);
    document.getElementById('progress-percent').textContent = `${pct}%`;
    document.getElementById('progress-fill').style.width = `${pct}%`;
}

function confirmFinish() {
    const answeredCount = Object.keys(state.answers).length;
    const unanswered = questionsData.length - answeredCount;
    let msg = "¿Está seguro de finalizar y enviar la evaluación institucional?";
    if (unanswered > 0) {
        msg += `\n⚠️ Advertencia: Aún tiene ${unanswered} pregunta(s) sin responder.`;
    }
    if (confirm(msg)) {
        finishExam();
    }
}

function finishExam() {
    state.isFinished = true;
    state.completedDate = new Date().toLocaleString('es-EC');
    saveState();
    showResultsScreen();
}

function showResultsScreen() {
    document.getElementById('exam-screen').classList.add('hidden');
    document.getElementById('timer-display').classList.add('hidden');
    document.getElementById('fullscreen-overlay').style.display = 'none';
    document.getElementById('results-screen').style.display = 'block';

    document.getElementById('res-student-name').textContent = state.user.name || "Estudiante";
    document.getElementById('res-student-id').textContent = state.user.id || "N/A";
    document.getElementById('res-date').textContent = state.completedDate || new Date().toLocaleString('es-EC');

    let score = 0;
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];

    questionsData.forEach((q, idx) => {
        const userAns = state.answers[q.id];
        const isCorrect = userAns === q.correct;
        if (isCorrect) score++;

        const item = document.createElement('div');
        item.className = 'review-item';

        let statusBadge = '';
        if (userAns === undefined) {
            statusBadge = `<span class="review-status status-unanswered">SIN RESPONDER</span>`;
        } else if (isCorrect) {
            statusBadge = `<span class="review-status status-correct">CORRECTO</span>`;
        } else {
            statusBadge = `<span class="review-status status-incorrect">INCORRECTO</span>`;
        }

        item.innerHTML = `
            ${statusBadge}
            <div class="q-title">${idx + 1}. ${q.text}</div>
            <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 8px;">
                Su respuesta: <strong>${userAns !== undefined ? letters[userAns] + ') ' + q.options[userAns] : 'Sin responder'}</strong> | 
                Respuesta correcta: <strong style="color: var(--success);">${letters[q.correct]}) ${q.options[q.correct]}</strong>
            </div>
            <div class="feedback-box">
                <strong>💡 Solución detallada paso a paso:</strong><br>
                ${q.explanation}
            </div>
        `;
        reviewList.appendChild(item);
    });

    const finalGrade = ((score / questionsData.length) * 10).toFixed(2);

    document.getElementById('res-score').textContent = `${score}/${questionsData.length}`;
    document.getElementById('res-grade').textContent = `${finalGrade} / 10`;
    document.getElementById('res-accuracy').textContent = `${Math.round((score / questionsData.length) * 100)}%`;
    document.getElementById('res-infractions').textContent = state.infractions;

    if (window.renderMathInElement) {
        renderMathInElement(reviewList, { delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}] });
    }
}

function downloadPDF() {
    const element = document.getElementById('report-content');
    const { jsPDF } = window.jspdf;

    html2canvas(element, { scale: 2 }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`Reporte_Despejes_${state.user.id || 'Estudiante'}.pdf`);
    });
}