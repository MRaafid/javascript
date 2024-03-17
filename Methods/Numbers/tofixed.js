function root(a,b,c)
      {
         p=b*b;
         q=4*a*c;
         r= 2*a;
         s=p-q;
         t=Math.sqrt(s);
         u=-b-t;
         v=-b+t;
         x1=v/r;
         x2=u/r;
         console.log(`The roots of the equation is ${x1} and ${x2}`)
         console.log("")
         console.log(`USING TO FIXED:`)
         console.log(`The roots of the equation is ${x1.toFixed(2)} and ${x2.toFixed(2)}`)
      }

root(3,5,2)
