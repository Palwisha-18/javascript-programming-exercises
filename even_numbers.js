// Print all even numbers between 0 - 10

function print_even_numbers(starting_number, ending_number) {
    for (let i = starting_number; i < ending_number; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

print_even_numbers(0, 10);