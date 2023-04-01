#include<stdio.h>

int main(){
    char str[]="shubh";
    for(int i=0;i<5;i++){
        str[i]=str[i]+'A'-'a';
    }
    printf("%s",str);
return 0;
}