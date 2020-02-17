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

* The user must input an age and gender -> age: Integer type (Ex: 23), gender: String Type (Ex: "male", "female", "non-binary")
* A Mercury year is .24 Earth years (age / .24)
* A Venus year is .62 Earth years (age / .62)
* A Mars year is 1.88 Earth years (age / 1.88)
* A Jupiter year is 11.86 Earth years (age / 11.86)
* A Saturn year is 29.46 Earth years (age / 29.46)
* A Uranus year is 84.01 Earth years (age / 84.01)
* A Neptune year is 164.79 Earth years (age / 164.79)
* A Pluto year is 248.59 Earth years (age / 248.59)
* Determine life expectancy depending on demographics 
* If the user has lived past life expectancy return the number of years they lived past 
* Life expectancy for males: 69.8 
* Life expectancy for females: 74.2
* Life expectancy for non-binary: 72

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
Program calculates their Earth age in Pluto years | age: 23, gender: "male" | Pluto years: 0.09 years


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