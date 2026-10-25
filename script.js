const userProfile = {
    name: "Tolbasy Aliakbar",
    birthYear: 2007,
    isDeveloper: false,
    hobbies: ["Football", "Gaming", "Music"]
};

function showProfile() {
    const currentYear = new Date().getFullYear();
    const age = currentYear - userProfile.birthYear;
    const months = age * 12;
    const numberOfHobbies = userProfile.hobbies.length;

    document.getElementById("profileName").textContent = userProfile.name;
    document.getElementById("profileYear").textContent = userProfile.birthYear;
    document.getElementById("profileDeveloper").textContent = userProfile.isDeveloper;
    document.getElementById("profileAge").textContent = age;
    document.getElementById("profileMonths").textContent = months;
    document.getElementById("hobbyCount").textContent = numberOfHobbies;

    console.log("User profile:", userProfile);
    console.log("Age:", age);
    console.log("Approximate months:", months);
    console.log("Hobbies count:", numberOfHobbies);
}

function showHobbies() {
    const list = document.getElementById("hobbyList");
    list.innerHTML = "";

    for (let i = 0; i < userProfile.hobbies.length; i++) {
        const item = document.createElement("li");
        item.textContent = userProfile.hobbies[i];
        list.appendChild(item);
    }
    showProfile();
}

document.getElementById("profileForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const newName = document.getElementById("username").value.trim();
    const newBirthYear = Number(document.getElementById("birthYear").value);
    const currentYear = new Date().getFullYear();

    if (newName === "" || newBirthYear < 1900 || newBirthYear > currentYear) {
        document.getElementById("message").textContent = "Please enter a valid name and birth year.";
        document.getElementById("message").style.color = "red";
        return;
    }

    userProfile.name = newName;
    userProfile.birthYear = newBirthYear;
    showProfile();

    document.getElementById("message").textContent = "Profile updated successfully!";
    document.getElementById("message").style.color = "green";
});

document.getElementById("addButton").addEventListener("click", function () {
    const hobbyInput = document.getElementById("newHobby");
    const newHobby = hobbyInput.value.trim();

    if (newHobby !== "") {
        userProfile.hobbies.push(newHobby);
        showHobbies();
        hobbyInput.value = "";
    }
});

document.getElementById("removeButton").addEventListener("click", function () {
    if (userProfile.hobbies.length > 0) {
        userProfile.hobbies.pop();
        showHobbies();
    }
});

showHobbies();