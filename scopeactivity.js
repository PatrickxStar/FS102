function outer() {

    let a = 'This is string value a.'; // both are local variables here - Both are block-scoped
    let b = 'This is string value b.';
    console.log(a, b);
    
        function inner(a, b) {
            console.log(a, b);
    //Creating two parameters named a & b then changing the property of b => b2
             a = 'This is a string value part 2a YEEHAW';
             b = 'This is a string value part 2b WOOHOO'; //they've both become parameters in the local scope. 
            console.log (a);
            console.log(b);
        }
    inner(a, b);
    console.log(a, b);
    }
    outer();