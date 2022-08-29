const nota = 75.6;

const porcento = (nota/100) * 100;

if (porcento >= 90)
    console.log('Nota A');

    else if (porcento >= 80)
        console.log('Nota B');

        else if (porcento >= 70)
            console.log('Nota C');

            else if (porcento >= 60)
                console.log('Nota D');

                else if (porcento >= 50)
                    console.log('Nota E');

                    else if (porcento < 50)
                        console.log('Nota F');

                        else if (porcento < 0 || porcento > 100)
                            console.log('erro');