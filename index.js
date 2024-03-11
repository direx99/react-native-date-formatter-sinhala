function formatMonth(month) {
    const monthNames = {
        1: { En: "January", Si: "ජනවාරි" },
        2: { En: "February", Si: "පෙබරවාරි" },
        3: { En: "March", Si: "මාර්තු" },
        4: { En: "April", Si: "අප්‍රේල්" },
        5: { En: "May", Si: "මැයි" },
        6: { En: "June", Si: "ජූනි" },
        7: { En: "July", Si: "ජූලි" },
        8: { En: "August", Si: "අගෝස්තු" },
        9: { En: "September", Si: "සැප්තැම්බර්" },
        10: { En: "October", Si: "ඔක්තෝබර්" },
        11: { En: "November", Si: "නොවැම්බර්" },
        12: { En: "December", Si: "දෙසැම්බර්" }
    };

    return monthNames[month];
}

module.exports = formatMonth;
