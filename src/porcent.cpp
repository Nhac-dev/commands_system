#include "iostream"
#include <locale.h>
#include <stdlib.h>

using namespace std;

int main(){
    setlocale(LC_ALL, "Portuguese");
    
    float value_percent, value_product, value_desconted, value_final;
    
    cout << "Digite o valor do produto: R$";
    cin >> value_product;

    cout << "\nDigite o desconto em porcento: %";
    cin >> value_percent;

    value_desconted = (value_percent / 100) * value_product;

    value_final = value_product - value_desconted;

    cout << "Valor do produto R$: " << value_product << ";\nValor descontado: " << value_percent << "%/R$" << value_desconted << ";\nValor final: R$" << value_final << "." << endl; 

    return 0;
}