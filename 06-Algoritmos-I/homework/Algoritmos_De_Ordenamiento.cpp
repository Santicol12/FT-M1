#include <iostream>
#include <stdio.h>
#include <windows.h>
using namespace std;

void imprimeArreglo(int ar[],int tamAr){
	cout<<"Arreglo = ["<<ar[0];
	for (int y=1;y<tamAr;y++){
		cout<<", "<<ar[y];	
	}
	cout<<"]"<<endl;
}

int *crearArregloDes(int tamano){
	int *arr;
	arr = new int [tamano];
	for (int f=0;f<tamano;f++){
		arr[f] = tamano*10 - 10*f;	
	}
	return arr;
}

int *intercambiar(int m[], int menor, int aCambiar){
	int auxiliar = m[menor];
	m[menor] = m[aCambiar];
	m[aCambiar] = auxiliar;
	
	return m;
}

int *seleccion(int a[], int N){
	int i,j,min;
	for (i=0;i<N-1; i++){
		min = i;
		for (j=i+1;j<N; j++){
			if(a[j] < a[min])
				min = j;
		}
		a = intercambiar(a, min, i);
	}
	return a;
}

int *insercion(int a[], int N){
	int i,j,temp;
	for (i=1; i<N; i++){
		j=i; 
		temp = a[j];
		while(a[j-1] > temp && j > 0){
			a[j] = a[j-1];
			j--;
		}
		a[j]= temp;
	}
	return a;
}

int *burbuja(int a[], int N){
	int i,j;
	for (i=N; i>=0; i--){
		for(j=1; j<i; j++){
			if(a[j-1] > a[j])
				a = intercambiar(a,j-1,j);
		}
	}
	return a;
}

int main(){
		int t = 20;
		int *arreglo = crearArregloDes(t);
		imprimeArreglo(arreglo,t);
		arreglo = burbuja(arreglo,t);
		imprimeArreglo(arreglo,t);
}






