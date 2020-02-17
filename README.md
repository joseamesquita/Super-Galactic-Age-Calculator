# _Super Galactic Age Calculator_

#### _A solar year lasts 365 days on planet Earth. However, the length of a solar year varies from planet to planet. For instance, a solar year on Mercury lasts 88 days. This application determines a user’s age and displays their age to solar planets. 02.07.2020_

#### Developed by: Jose Amesquita

## Description

The Super Galactic Age Calculator allows the user to enter their age and an option to insert a gender. Then, after the user has inserted their age and preferred gender, the application will return the user's age to solar planets. Depending on the user's gender preference the applcation will also return the user's life expectancy for each planet. 

## Setup/Installation Requirements

1. visit https://github.com/joseamesquita/super-galactic-age-calculator.git
2. click the green button: Clone or download 
3. select copy and open terminal from your desktop
4. on terminal browse to your desktop: cd Desktop
5. type: 'git clone https://github.com/joseamesquita/super-galactic-age-calculator.git'
6. type: 'code .' 
7. to run the application type: 'open index.html' within the super-galactic-age-calculator folder

## Specs

Here is a chart of our solar planets years and days equivalent to 1 Earth year or 365 days. Note: These numbers are approximately.  

Planets | Days | Years |
--- | --- | --- |
Mercury | 88 | .24 |
Venus | 225 | .62 |
Mars | 687 | 1.88 | 
Jupiter | 4,329 | 11.86 |
Saturn | 10,753 | 29.46 |
Uranus | 30,664 | 84.01 | 
Neptune | 60,148 | 164.79 |

Here is the life expectancy in years for a male, female, and non-binary person on Earth. 

Gender | Life Expectancy | 
--- | --- | 
female | 74.2 | 
male | 69.8 | 
non-binary | 72 | 

Below are the application specifications that determine the result of the program. This application will take the user's age (Integer type) and preferred gender (String type) from the table above and will return their age in years for every solar planet. As well, this application will return the number of years the users is projected to live to depending on their life expectancy. If the user has surpassed its life expectancy, then the program will return the number of years they lived past. 

Behavior | Input | Output |
--- | --- | --- |
allows users to input their age and gender | age: 23, gender: "male" | Earth years: 23 years, Years to life expectancy for you: 46.80
Program calculates their Earth age in Mercury years | age: 23, gender: "male" | Mercury years: 95.83 years, Years lived past life expectancy for you: 26.03
Program calculates their Earth age in Venus years | age: 23, gender: "male" | Venus years: 37.10 years, Years to life expectancy for you: 32.70
Program calculates their Earth age in Mars years | age: 23, gender: "male" | Mars years: 12.23 years, Years to life expectancy for you: 57.57 
Program calculates their Earth age in Jupiter years | age: 23, gender: "male" | Jupiter years: 1.94 years, Years to life expectancy for you: 67.86
Program calculates their Earth age in Saturn years | age: 23, gender: "male" | Saturn years: 0.78 years
Program calculates their Earth age in Uranus years | age: 23, gender: "male" | Uranus years: 0.27 years
Program calculates their Earth age in Neptune years | age: 23, gender: "male" | Neptune years: 0.14 years


## Known Bugs

_This application is under-developed and is currently improving._

## Support and contact details

If you have any questions, collaborate on a project email, or grab a cup of coffee please email me @ joseamesquita11@gmail.com. 

## Technologies Used

* _JavaScript & JQuery_
* _form inputs_
* _branching_
* _Git_
* _ES6 featues including classes, let and const_
* _Testing: Jest_
* _Webpack: lint, bundle, and process code_
* _Dependencies are managed with npm_

### License

*This is licensed by MIT.*

Copyright (c) 2020 **_Jose Amesquita_**