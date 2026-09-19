// BANCO DE 40 PREGUNTAS CON RETROALIMENTACIÓN / SOLUCIONARIO PASO A PASO
const questionsData = [
    // Tema 1: Simplificación (3)
    { 
        id: 1, 
        topic: "Simplificación de Expresiones Algebraicas", 
        text: "Simplifique la siguiente expresión: $$\\frac{(x^2 y^{-3})^3}{(x^{-1} y^2)^2}$$", 
        options: ["$x^8 y^{-13}$", "$x^4 y^{-11}$", "$x^8 y^{-7}$", "$x^5 y^{-13}$"], 
        correct: 0,
        explanation: "Aplicando propiedades de los exponentes: <br>1. Numerador: $(x^2 y^{-3})^3 = x^6 y^{-9}$ <br>2. Denominador: $(x^{-1} y^2)^2 = x^{-2} y^4$ <br>3. División: $x^{6 - (-2)} y^{-9 - 4} = x^8 y^{-13}$."
    },
    { 
        id: 2, 
        topic: "Simplificación de Expresiones Algebraicas", 
        text: "Al simplificar la expresión $\\sqrt[3]{a^6 b^9 c^{12}}$, se obtiene:", 
        options: ["$a^2 b^3 c^4$", "$a^3 b^3 c^4$", "$a^2 b^6 c^9$", "$a^3 b^6 c^8$"], 
        correct: 0,
        explanation: "Se divide cada exponente por el índice de la raíz ($3$): <br> $a^{6/3} b^{9/3} c^{12/3} = a^2 b^3 c^4$."
    },
    { 
        id: 3, 
        topic: "Simplificación de Expresiones Algebraicas", 
        text: "Calcule el valor simplificado de: $$\\left( \\frac{27^2 \\cdot 9^{-1}}{3^4} \\right)^{1/2}$$", 
        options: ["$1$", "$3$", "$9$", "$1/3$"], 
        correct: 0,
        explanation: "Expresando todo en base 3: <br>$27^2 = (3^3)^2 = 3^6$, $9^{-1} = (3^2)^{-1} = 3^{-2}$. <br>Numerador: $3^6 \\cdot 3^{-2} = 3^4$. <br>Fracción: $\\frac{3^4}{3^4} = 1$. <br>Raíz: $(1)^{1/2} = 1$."
    },

    // Tema 2: Jerarquía de operadores (3)
    { 
        id: 4, 
        topic: "Jerarquía de Operadores", 
        text: "Determine el resultado numérico de: $$12 - 4 \\div 2 + 3 \\cdot (5 - 2)^2$$", 
        options: ["$37$", "$27$", "$41$", "$19$"], 
        correct: 0,
        explanation: "1. Paréntesis: $(5-2) = 3$ <br>2. Potencia: $3^2 = 9$ <br>3. División y Multiplicación: $4 \\div 2 = 2$ y $3 \\cdot 9 = 27$ <br>4. Suma y Resta: $12 - 2 + 27 = 37$."
    },
    { 
        id: 5, 
        topic: "Jerarquía de Operadores", 
        text: "Evalúe la siguiente expresión: $$20 - [2 + 3 \\cdot (8 - 6)] \\div 2$$", 
        options: ["$16$", "$14$", "$18$", "$12$"], 
        correct: 0,
        explanation: "1. Paréntesis interno: $(8-6) = 2$ <br>2. Multiplicación en corchete: $3 \\cdot 2 = 6$ <br>3. Suma en corchete: $2 + 6 = 8$ <br>4. División: $8 \\div 2 = 4$ <br>5. Resta final: $20 - 4 = 16$."
    },
    { 
        id: 6, 
        topic: "Jerarquía de Operadores", 
        text: "Calcule el resultado exacto de: $$5 + 2 \\cdot 3^2 - 18 \\div 3$$", 
        options: ["$17$", "$15$", "$21$", "$23$"], 
        correct: 0,
        explanation: "1. Potencia: $3^2 = 9$ <br>2. Multiplicación y división: $2 \\cdot 9 = 18$ y $18 \\div 3 = 6$ <br>3. Operaciones finales: $5 + 18 - 6 = 17$."
    },

    // Tema 3: Expresiones algebraicas (5)
    { 
        id: 7, 
        topic: "Expresiones Algebraicas", 
        text: "Desarrolle y simplifique: $$(2x - 3y)^2 - (2x + 3y)^2$$", 
        options: ["$-24xy$", "$24xy$", "$8x^2 - 18y^2$", "$0$"], 
        correct: 0,
        explanation: "Usando diferencia de cuadrados $A^2 - B^2 = (A - B)(A + B)$: <br>$A = 2x - 3y$, $B = 2x + 3y$ <br>$(A - B) = (2x - 3y) - (2x + 3y) = -6y$ <br>$(A + B) = (2x - 3y) + (2x + 3y) = 4x$ <br>Resultado: $(-6y)(4x) = -24xy$."
    },
    { 
        id: 8, 
        topic: "Expresiones Algebraicas", 
        text: "Factorice completamente la expresión: $$x^3 - 8y^3$$", 
        options: ["$(x - 2y)(x^2 + 2xy + 4y^2)$", "$(x - 2y)(x^2 - 2xy + 4y^2)$", "$(x + 2y)(x^2 - 2xy + 4y^2)$", "$(x - 2y)^3$"], 
        correct: 0,
        explanation: "Fórmula de diferencia de cubos: $A^3 - B^3 = (A - B)(A^2 + AB + B^2)$. <br>Con $A = x$ y $B = 2y$, resulta: $(x - 2y)(x^2 + 2xy + 4y^2)$."
    },
    { 
        id: 9, 
        topic: "Expresiones Algebraicas", 
        text: "Si $x + \\frac{1}{x} = 5$, encuentre el valor de $x^2 + \\frac{1}{x^2}$:", 
        options: ["$23$", "$25$", "$21$", "$27$"], 
        correct: 0,
        explanation: "Elevando ambos lados al cuadrado: <br>$(x + \\frac{1}{x})^2 = 5^2 \\implies x^2 + 2(x)(\\frac{1}{x}) + \\frac{1}{x^2} = 25$ <br>$x^2 + 2 + \\frac{1}{x^2} = 25 \\implies x^2 + \\frac{1}{x^2} = 23$."
    },
    { 
        id: 10, 
        topic: "Expresiones Algebraicas", 
        text: "Factorice el trinomio: $$6x^2 + 7x - 3$$", 
        options: ["$(2x + 3)(3x - 1)$", "$(3x + 3)(2x - 1)$", "$(6x - 1)(x + 3)$", "$(2x - 3)(3x + 1)$"], 
        correct: 0,
        explanation: "Buscamos dos números que multiplicados den $6 \\cdot (-3) = -18$ y sumados den $7$: son $9$ y $-2$. <br>$6x^2 + 9x - 2x - 3 = 3x(2x + 3) - 1(2x + 3) = (2x + 3)(3x - 1)$."
    },
    { 
        id: 11, 
        topic: "Expresiones Algebraicas", 
        text: "Simplifique la fracción algebraica: $$\\frac{x^2 - 9}{x^2 - 5x + 6}$$", 
        options: ["$\\frac{x + 3}{x - 2}$", "$\\frac{x - 3}{x - 2}$", "$\\frac{x + 3}{x + 2}$", "$\\frac{x - 3}{x + 2}$"], 
        correct: 0,
        explanation: "Factorizando numerador y denominador: <br>Numerador: $(x-3)(x+3)$ <br>Denominador: $(x-3)(x-2)$ <br>Cancelando $(x-3)$: $\\frac{x+3}{x-2}$."
    },

    // Tema 4: Ecuaciones de primer grado (6)
    { 
        id: 12, 
        topic: "Ecuaciones de Primer Grado", 
        text: "Resuelva la siguiente ecuación: $$\\frac{3x - 1}{4} - \\frac{x + 2}{2} = 1$$", 
        options: ["$x = 9$", "$x = 7$", "$x = 5$", "$x = 3$"], 
        correct: 0,
        explanation: "Multiplicando toda la ecuación por el MCM ($4$): <br>$(3x - 1) - 2(x + 2) = 4 \\implies 3x - 1 - 2x - 4 = 4$ <br>$x - 5 = 4 \\implies x = 9$."
    },
    { 
        id: 13, 
        topic: "Ecuaciones de Primer Grado", 
        text: "Tres números consecutivos suman $126$. ¿Cuál es el número mayor?", 
        options: ["$43$", "$41$", "$42$", "$44$"], 
        correct: 0,
        explanation: "Ecuación: $x + (x+1) + (x+2) = 126 \\implies 3x + 3 = 126 \\implies 3x = 123 \\implies x = 41$. <br>El mayor es $x + 2 = 43$."
    },
    { 
        id: 14, 
        topic: "Ecuaciones de Primer Grado", 
        text: "Si al triple de un número se le resta $15$, se obtiene el doble del mismo número aumentado en $10$. El número es:", 
        options: ["$25$", "$20$", "$15$", "$30$"], 
        correct: 0,
        explanation: "Planteamiento: $3x - 15 = 2x + 10 \\implies 3x - 2x = 10 + 15 \\implies x = 25$."
    },
    { 
        id: 15, 
        topic: "Ecuaciones de Primer Grado", 
        text: "Un padre tiene $40$ años y su hijo $10$. ¿Dentro de cuántos años la edad del padre será el triple de la del hijo?", 
        options: ["$5$ años", "$10$ años", "$8$ años", "$6$ años"], 
        correct: 0,
        explanation: "Sea $t$ los años transcurridos: <br>$40 + t = 3(10 + t) \\implies 40 + t = 30 + 3t \\implies 2t = 10 \\implies t = 5$ años."
    },
    { 
        id: 16, 
        topic: "Ecuaciones de Primer Grado", 
        text: "Resuelva para $x$: $$5(x - 2) - 3(2x + 1) = 4(x - 1) + 1$$", 
        options: ["$x = -2$", "$x = 2$", "$x = -4$", "$x = 4$"], 
        correct: 0,
        explanation: "Destruyendo paréntesis: <br>$5x - 10 - 6x - 3 = 4x - 4 + 1 \\implies -x - 13 = 4x - 3$ <br>$-5x = 10 \\implies x = -2$."
    },
    { 
        id: 17, 
        topic: "Ecuaciones de Primer Grado", 
        text: "La suma de dos números es $80$ y su diferencia es $20$. Hallar el número menor.", 
        options: ["$30$", "$50$", "$25$", "$35$"], 
        correct: 0,
        explanation: "Sistema: $x + y = 80$ y $x - y = 20$. <br>Sumando: $2x = 100 \\implies x = 50$. <br>El menor es $y = 80 - 50 = 30$."
    },

    // Tema 5: Sistema de ecuaciones (1)
    { 
        id: 18, 
        topic: "Sistema de Ecuaciones", 
        text: "Resuelva el sistema y halle el valor de $x + y$: $$\\begin{cases} 2x + 3y = 13 \\\\ 5x - 2y = 4 \\end{cases}$$", 
        options: ["$5$", "$6$", "$7$", "$4$"], 
        correct: 0,
        explanation: "Multiplicando la 1ª por 2 y la 2ª por 3: <br>$4x + 6y = 26$ <br>$15x - 6y = 12$ <br>Sumando: $19x = 38 \\implies x = 2$. <br>Sustituyendo $x$: $2(2) + 3y = 13 \\implies 3y = 9 \\implies y = 3$. <br>Suma $x + y = 2 + 3 = 5$."
    },

    // Tema 6: Cálculo de edades (3)
    { 
        id: 19, 
        topic: "Cálculo de Edades", 
        text: "La edad actual de Pedro es el triple de la de Juan. Si hace $5$ años la suma de sus edades era $30$ años, ¿cuál es la edad actual de Pedro?", 
        options: ["$30$ años", "$10$ años", "$25$ años", "$35$ años"], 
        correct: 0,
        explanation: "Juan actual = $x$, Pedro actual = $3x$. <br>Hace 5 años: $(x - 5) + (3x - 5) = 30 \\implies 4x - 10 = 30 \\implies 4x = 40 \\implies x = 10$. <br>Edad de Pedro = $3(10) = 30$ años."
    },
    { 
        id: 20, 
        topic: "Cálculo de Edades", 
        text: "Dentro de $10$ años, María tendrá el doble de la edad que tenía hace $5$ años. ¿Qué edad tiene María hoy?", 
        options: ["$20$ años", "$15$ años", "$25$ años", "$18$ años"], 
        correct: 0,
        explanation: "Ecuación: $x + 10 = 2(x - 5) \\implies x + 10 = 2x - 10 \\implies x = 20$ años."
    },
    { 
        id: 21, 
        topic: "Cálculo de Edades", 
        text: "La suma de las edades de Ana y Carlos es $48$ años. Si Ana es $6$ años mayor que Carlos, ¿cuántos años tiene Carlos?", 
        options: ["$21$ años", "$27$ años", "$18$ años", "$24$ años"], 
        correct: 0,
        explanation: "Carlos = $c$, Ana = $c + 6$. <br>$c + (c + 6) = 48 \\implies 2c + 6 = 48 \\implies 2c = 42 \\implies c = 21$ años."
    },

    // Tema 7: Razones y proporciones (4)
    { 
        id: 22, 
        topic: "Razones y Proporciones", 
        text: "La razón entre dos números es $\\frac{3}{5}$. Si la suma de ambos números es $160$, ¿cuál es el número mayor?", 
        options: ["$100$", "$60$", "$120$", "$90$"], 
        correct: 0,
        explanation: "Números: $3k$ y $5k$. <br>$3k + 5k = 160 \\implies 8k = 160 \\implies k = 20$. <br>El mayor es $5(20) = 100$."
    },
    { 
        id: 23, 
        topic: "Razones y Proporciones", 
        text: "En una academia la relación entre hombres y mujeres es de $4$ a $7$. Si hay $140$ mujeres, ¿cuántos hombres hay?", 
        options: ["$80$", "$70$", "$90$", "$60$"], 
        correct: 0,
        explanation: "Proporción: $\\frac{H}{M} = \\frac{4}{7} \\implies \\frac{H}{140} = \\frac{4}{7} \\implies H = 140 \\cdot \\frac{4}{7} = 80$."
    },
    { 
        id: 24, 
        topic: "Razones y Proporciones", 
        text: "Dos números están en la relación $2:3$. Si se añade $8$ a cada uno, la nueva relación es $3:4$. Calcular el número menor.", 
        options: ["$16$", "$24$", "$12$", "$20$"], 
        correct: 0,
        explanation: "Planteamiento: $\\frac{2k + 8}{3k + 8} = \\frac{3}{4} \\implies 4(2k + 8) = 3(3k + 8)$ <br>$8k + 32 = 9k + 24 \\implies k = 8$. <br>El número menor es $2k = 2(8) = 16$."
    },
    { 
        id: 25, 
        topic: "Razones y Proporciones", 
        text: "Si $A:B = 2:3$ y $B:C = 4:5$, determine la relación $A:C$:", 
        options: ["$8:15$", "$2:5$", "$6:15$", "$8:10$"], 
        correct: 0,
        explanation: "Multiplicando las razones: $\\frac{A}{B} \\cdot \\frac{B}{C} = \\frac{2}{3} \\cdot \\frac{4}{5} \\implies \\frac{A}{C} = \\frac{8}{15}$."
    },

    // Tema 8: Regla de 3 compuesta (3)
    { 
        id: 26, 
        topic: "Regla de 3 Compuesta", 
        text: "Si $8$ obreros construyen una pared en $10$ días trabajando $6$ horas diarias, ¿cuántos días tardarán $5$ obreros trabajando $8$ horas diarias en hacer la misma pared?", 
        options: ["$12$ días", "$10$ días", "$15$ días", "$14$ días"], 
        correct: 0,
        explanation: "Relación: $Obreros \\cdot Días \\cdot Horas = constante$. <br>$8 \\cdot 10 \\cdot 6 = 5 \\cdot d \\cdot 8 \\implies 480 = 40d \\implies d = 12$ días."
    },
    { 
        id: 27, 
        topic: "Regla de 3 Compuesta", 
        text: "Para alimentar $12$ caballos durante $8$ días se necesitan $384$ kg de heno. ¿Cuántos kg de heno se necesitarán para alimentar $15$ caballos durante $5$ días?", 
        options: ["$300$ kg", "$320$ kg", "$280$ kg", "$350$ kg"], 
        correct: 0,
        explanation: "Relación: $\\frac{Heno}{Caballos \\cdot Días} = constante$. <br>$\\frac{384}{12 \\cdot 8} = \\frac{x}{15 \\cdot 5} \\implies \\frac{384}{96} = \\frac{x}{75} \\implies 4 = \\frac{x}{75} \\implies x = 300$ kg."
    },
    { 
        id: 28, 
        topic: "Regla de 3 Compuesta", 
        text: "Un grupo de $10$ impresoras trabaja $3$ horas diarias para imprimir $5000$ folletos en $4$ días. ¿Cuántas horas diarias deberán trabajar $6$ impresoras para imprimir $8000$ folletos en $8$ días?", 
        options: ["$4$ horas", "$5$ horas", "$3$ horas", "$6$ horas"], 
        correct: 0,
        explanation: "Relación: $\\frac{Impresoras \\cdot Horas \\cdot Días}{Folletos} = cte$. <br>$\\frac{10 \\cdot 3 \\cdot 4}{5000} = \\frac{6 \\cdot h \\cdot 8}{8000} \\implies \\frac{120}{5000} = \\frac{48h}{8000} \\implies \\frac{120}{5} = \\frac{48h}{8} \\implies 24 = 6h \\implies h = 4$ horas."
    },

    // Tema 9: Porcentajes y Proporcionalidad (5)
    { 
        id: 29, 
        topic: "Porcentajes y Proporcionalidad", 
        text: "¿Cuál es la media proporcional entre $4$ y $16$?", 
        options: ["$8$", "$10$", "$6$", "$12$"], 
        correct: 0,
        explanation: "Media proporcional $x = \\sqrt{a \\cdot b} = \\sqrt{4 \\cdot 16} = \\sqrt{64} = 8$."
    },
    { 
        id: 30, 
        topic: "Porcentajes y Proporcionalidad", 
        text: "Halle la tercera proporcional entre $9$ y $12$:", 
        options: ["$16$", "$15$", "$18$", "$20$"], 
        correct: 0,
        explanation: "Tercera proporcional: $\\frac{9}{12} = \\frac{12}{x} \\implies 9x = 144 \\implies x = 16$."
    },
    { 
        id: 31, 
        topic: "Porcentajes y Proporcionalidad", 
        text: "Un artículo cuesta $\$200$. Se le aplica un descuento del $20\\%$ y luego un incremento del $10\\%$. ¿Cuál es el precio final?", 
        options: ["$\$176$", "$\$180$", "$\$170$", "$\$184$"], 
        correct: 0,
        explanation: "1. Con 20% descuento: $200 \\cdot 0.80 = 160$. <br>2. Con 10% incremento: $160 \\cdot 1.10 = 176$ dólares."
    },
    { 
        id: 32, 
        topic: "Porcentajes y Proporcionalidad", 
        text: "El $35\\%$ de un número es $140$. ¿Cuál es el $60\\%$ de ese mismo número?", 
        options: ["$240$", "$400$", "$280$", "$210$"], 
        correct: 0,
        explanation: "Número total $N = \\frac{140}{0.35} = 400$. <br>El 60% de 400 es $400 \\cdot 0.60 = 240$."
    },
    { 
        id: 33, 
        topic: "Porcentajes y Proporcionalidad", 
        text: "Si el precio de un producto aumentó de $\$80$ a $\$100$, ¿cuál fue el porcentaje de aumento?", 
        options: ["$25\\%$", "$20\\%$", "$15\\%$", "$30\\%$"], 
        correct: 0,
        explanation: "Aumento en valor: $100 - 80 = 20$. <br>Porcentaje = $\\frac{20}{80} \\cdot 100\\% = 25\\%$."
    },

    // Tema 10: Media aritmética (2)
    { 
        id: 34, 
        topic: "Media Aritmética", 
        text: "El promedio de $5$ números es $18$. Si se elimina uno de los números, el promedio de los restantes pasa a ser $20$. ¿Qué número se eliminó?", 
        options: ["$10$", "$12$", "$8$", "$14$"], 
        correct: 0,
        explanation: "Suma inicial = $5 \\cdot 18 = 90$. <br>Suma final de 4 números = $4 \\cdot 20 = 80$. <br>Número eliminado = $90 - 80 = 10$."
    },
    { 
        id: 35, 
        topic: "Media Aritmética", 
        text: "Las notas de un estudiante en 4 exámenes son: $14, 16, 12, 18$. ¿Qué nota debe sacar en el quinto examen para obtener un promedio de $16$?", 
        options: ["$20$", "$18$", "$19$", "$17$"], 
        correct: 0,
        explanation: "Suma deseada de 5 notas = $5 \\cdot 16 = 80$. <br>Suma de las 4 notas = $14 + 16 + 12 + 18 = 60$. <br>Nota necesaria = $80 - 60 = 20$."
    },

    // Tema 11: Combinatoria (5)
    { 
        id: 36, 
        topic: "Combinatoria", 
        text: "¿De cuántas maneras distintas se pueden organizar $5$ personas en una fila?", 
        options: ["$120$", "$60$", "$24$", "$720$"], 
        correct: 0,
        explanation: "Permutación simple: $5! = 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 120$ maneras."
    },
    { 
        id: 37, 
        topic: "Combinatoria", 
        text: "Un grupo de $8$ estudiantes desea elegir un presidente, un vicepresidente y un secretario. ¿Cuántas directivas diferentes se pueden formar?", 
        options: ["$336$", "$56$", "$672$", "$120$"], 
        correct: 0,
        explanation: "Importa el orden (Variación): $V(8,3) = 8 \\cdot 7 \\cdot 6 = 336$ directivas."
    },
    { 
        id: 38, 
        topic: "Combinatoria", 
        text: "¿Cuántos comités diferentes de $3$ personas se pueden formar a partir de un grupo de $7$ candidatos?", 
        options: ["$35$", "$210$", "$70$", "$42$"], 
        correct: 0,
        explanation: "No importa el orden (Combinación): $C(7,3) = \\frac{7 \\cdot 6 \\cdot 5}{3 \\cdot 2 \\cdot 1} = 35$ comités."
    },
    { 
        id: 39, 
        topic: "Combinatoria", 
        text: "¿Cuántas palabras de $4$ letras (con o sin sentido) se pueden formar utilizando las letras de la palabra $AMOR$ sin repetir ninguna?", 
        options: ["$24$", "$12$", "$16$", "$256$"], 
        correct: 0,
        explanation: "Permutación de 4 elementos distintos: $4! = 4 \\cdot 3 \\cdot 2 \\cdot 1 = 24$ palabras."
    },
    { 
        id: 40, 
        topic: "Combinatoria", 
        text: "En un torneo de ajedrez participan $10$ jugadores. Si todos juegan contra todos una sola vez, ¿cuántas partidas se disputarán en total?", 
        options: ["$45$", "$90$", "$100$", "$50$"], 
        correct: 0,
        explanation: "Elección de parejas sin importar orden: $C(10,2) = \\frac{10 \\cdot 9}{2} = 45$ partidas."
    }
];

// TIEMPO CONFIGURADO: 80 minutos = 80 * 60 = 4800 segundos
const TOTAL_TIME = 80 * 60; 
const STORAGE_KEY = "EVAL_NUMERICA_LIGHT_STATE";

let state = {
    user: { name: '', id: '' },
    currentIndex: 0,
    answers: {},
    timeLeft: TOTAL_TIME,
    infractions: 0,
    attempt: 1,
    isStarted: false,
    isFinished: false,
    completedDate: ''
};

let timerInterval = null;

window.addEventListener('DOMContentLoaded', () => {
    loadState();
    if (state.isStarted && !state.isFinished) {
        document.getElementById('fullscreen-overlay').style.display = 'none';
        if (state.user.name) {
            document.getElementById('user-display').textContent = `${state.user.name} (${state.user.id}) - Intento ${state.attempt}`;
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
            if (!state.attempt) state.attempt = 1;
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

    document.getElementById('user-display').textContent = `${nameInput} (${idInput}) - Intento ${state.attempt}`;

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
            registerInfraction("Cambio de Pestaña");
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
            registerInfraction("Intento de uso de atajo restringido");
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
        alert("Límite de 3 faltas de seguridad alcanzado. La evaluación se enviará de forma automática.");
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
    let msg = "¿Está seguro de finalizar y entregar la evaluación?";
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
    document.getElementById('res-student-id').textContent = `${state.user.id || "N/A"} (Intento ${state.attempt} de 2)`;
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
                <strong>💡 Retroalimentación / Solución paso a paso:</strong><br>
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

    const retryBtn = document.getElementById('btn-retry');
    if (retryBtn) {
        if (state.attempt >= 2) {
            retryBtn.disabled = true;
            retryBtn.textContent = "🚫 Intentos Agotados (2/2)";
            retryBtn.style.opacity = "0.6";
            retryBtn.style.cursor = "not-allowed";
        } else {
            retryBtn.disabled = false;
            retryBtn.textContent = "🔄 Realizar Segundo Intento";
        }
    }

    if (window.renderMathInElement) {
        renderMathInElement(reviewList, { delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}] });
    }
}

// Lógica para reiniciar y realizar el segundo intento
function restartExam() {
    if (state.attempt >= 2) return;

    if (confirm("¿Desea comenzar su segundo y último intento? El tiempo se reiniciará a 80 minutos.")) {
        state.attempt = 2;
        state.currentIndex = 0;
        state.answers = {};
        state.timeLeft = TOTAL_TIME;
        state.infractions = 0;
        state.isStarted = true;
        state.isFinished = false;
        state.completedDate = '';
        saveState();

        document.getElementById('results-screen').style.display = 'none';
        document.getElementById('exam-screen').classList.remove('hidden');
        document.getElementById('timer-display').classList.remove('hidden');
        document.getElementById('infraction-banner').style.display = 'none';
        document.getElementById('infraction-count').textContent = '0';
        document.getElementById('user-display').textContent = `${state.user.name} (${state.user.id}) - Intento 2`;

        const elem = document.documentElement;
        if (elem.requestFullscreen) elem.requestFullscreen().catch(() => {});

        renderGrid();
        renderQuestion();
        startTimer();
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
        pdf.save(`Reporte_Evaluacion_${state.user.id || 'Estudiante'}_Intento${state.attempt}.pdf`);
    });
}