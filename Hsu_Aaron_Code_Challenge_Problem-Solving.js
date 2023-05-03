/* User Story
A computer application needs to be able to identify if a written paragraph is written in First, Second, or Third Person
*/

/* Pseudocode
Create function that will take inputed text to search for identifier words.
Create arrays containing words that identify whether person is talking in First,Second, or Third person.
Parse through text that will compare each word to the arrays to check if the text is in First, Second or Third Person.
Create functions for each check?
*/

// Check if Text is spoken in First Person
function FirstPersonCount(Text){
    var TextArray = ConvertStringToArray(Text);
    // Array to declare common First Person words
    var FirstPerson = ["I", "WE", "US", "OUR", "OURSELVES"];
    // Add a count to see how many First Person words were used.
    var count = 0;
    // For Loop to compare text how many of those words were used
    for (var i = 0; i < TextArray.length; i++){
        for (var j = 0; j < FirstPerson.length; j++){
            if (TextArray[i].toUpperCase() == FirstPerson[j].toUpperCase()){
                count++;
            }
        }
    }
    // Return the weighted count of all the words matching the First Person words
    return count;
}

// Check if Text is spoken in Second Person
function SecondPersonCount(Text){
    var TextArray = ConvertStringToArray(Text);
    // Array to declare common Second Person words
    var SecondPerson = ["YOU", "YOUR", "YOURS", "YOURSELF", "YOURSELVES"];
    // Add a count to see how many Second Person words were used.
    var count = 0;
    // For Loop to compare text how many of those words were used
    for (var i = 0; i < TextArray.length; i++){
        for (var j = 0; j < SecondPerson.length; j++){
            // console.log("TextArray = ",TextArray[i]);
            // console.log("SecondPerson check: ",SecondPerson[j]);
            if (TextArray[i].toUpperCase() == SecondPerson[j].toUpperCase()){
                count++;
            }
        }
    }
    // Return the weighted count of all the words matching the Second Person words
    return count;
}

// Check if Text is spoken in Third Person
function ThirdPersonCount(Text){
    var TextArray = ConvertStringToArray(Text);
    // Array to declare common Third Person words
    var ThirdPerson = ["HE", "HIM", "HIS", "HIMSELF", "SHE", "HER", "HERS", "HERSELF", "IT", "ITS", "ITSELF", "THEY", "THEM", "THEIR", "THEIRS", "THEMSELVES"];
    // Add a count to see how many Third Person words were used.
    var count = 0;
    // For Loop to compare text how many of those words were used
    for (var i = 0; i < TextArray.length; i++){
        for (var j = 0; j < ThirdPerson.length; j++){
            if (TextArray[i].toUpperCase() == ThirdPerson[j].toUpperCase()){
                count++;
            }
        }
    }
    // Return the weighted count of all the words matching the Third Person words
    return count;
}

// Overall function to check if text is in First, Second, or Third person
function PerspectiveCheck(Text){
    // Get weighted values of text for each persons
    var First = FirstPersonCount(Text);
    var Second = SecondPersonCount(Text);
    var Third = ThirdPersonCount(Text);

    // Debugging check to see the weight of each perspective
    // console.log("First person weight", First);
    // console.log("Second person weight", Second);
    // console.log("Third person weight", Third);

    if (First > Second && First > Third){
        return "First Person perspective";
    } else if (Second > First && Second > Third){
        return "Second Person Perspective";
    } else if (Third > First && Third > Second){
        return "Third Person Perspective";
    } else {
        return "Cannot parse Pronouns, but most likely in third person.";
    }
}

function ConvertStringToArray(Text){
    var result = [];
    var word = "";
    for (var i = 0; i<Text.length; i++){
        if (Text[i] == " " || Text[i] == "." || Text[i] == "!" || Text[i] == ","){
            if (word != ""){
                result.push(word);
            }            
            word = "";
        } else {
            word += Text[i];
        }
    }
    if (word != ""){
        result.push(word);
    }
    return result;
}

// Testing code with stories
var story1 = "I think I lost my wallet! I can not find it anywhere! Oh, I could just kick myself!";
var story2 = "You should be proud of yourselves for finishing this enormous project!";
var story3 = "The concertgoers roared their approval when they realized they would be getting an encore.";
var story4 = "Lydia was curious when the face appeared in the third-story window, but she hesitated before making her way upstairs.";
var story5 = "Mike always hated school.";


// var test = ConvertStringToArray(story2);
// console.log(test);
// console.log(FirstPersonCount(story1));
// console.log(SecondPersonCount(story2));
// console.log(ThirdPersonCount(story4));
console.log(PerspectiveCheck(story1)); // First Person View
console.log(PerspectiveCheck(story2)); // Second Person View
console.log(PerspectiveCheck(story3)); // Third Person View
console.log(PerspectiveCheck(story4)); // Third Person View
console.log(PerspectiveCheck(story5)); // Third Person View