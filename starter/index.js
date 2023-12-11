// ARRAY OF FINANCES

  var finances = [
    ['Jan-2010', 867884],
    ['Feb-2010', 984655],
    ['Mar-2010', 322013],
    ['Apr-2010', -69417],
    ['May-2010', 310503],
    ['Jun-2010', 522857],
    ['Jul-2010', 1033096],
    ['Aug-2010', 604885],
    ['Sep-2010', -216386],
    ['Oct-2010', 477532],
    ['Nov-2010', 893810],
    ['Dec-2010', -80353],
    ['Jan-2011', 779806],
    ['Feb-2011', -335203],
    ['Mar-2011', 697845],
    ['Apr-2011', 793163],
    ['May-2011', 485070],
    ['Jun-2011', 584122],
    ['Jul-2011', 62729],
    ['Aug-2011', 668179],
    ['Sep-2011', 899906],
    ['Oct-2011', 834719],
    ['Nov-2011', 132003],
    ['Dec-2011', 309978],
    ['Jan-2012', -755566],
    ['Feb-2012', 1170593],
    ['Mar-2012', 252788],
    ['Apr-2012', 1151518],
    ['May-2012', 817256],
    ['Jun-2012', 570757],
    ['Jul-2012', 506702],
    ['Aug-2012', -1022534],
    ['Sep-2012', 475062],
    ['Oct-2012', 779976],
    ['Nov-2012', 144175],
    ['Dec-2012', 542494],
    ['Jan-2013', 359333],
    ['Feb-2013', 321469],
    ['Mar-2013', 67780],
    ['Apr-2013', 471435],
    ['May-2013', 565603],
    ['Jun-2013', 872480],
    ['Jul-2013', 789480],
    ['Aug-2013', 999942],
    ['Sep-2013', -1196225],
    ['Oct-2013', 268997],
    ['Nov-2013', -687986],
    ['Dec-2013', 1150461],
    ['Jan-2014', 682458],
    ['Feb-2014', 617856],
    ['Mar-2014', 824098],
    ['Apr-2014', 581943],
    ['May-2014', 132864],
    ['Jun-2014', 448062],
    ['Jul-2014', 689161],
    ['Aug-2014', 800701],
    ['Sep-2014', 1166643],
    ['Oct-2014', 947333],
    ['Nov-2014', 578668],
    ['Dec-2014', 988505],
    ['Jan-2015', 1139715],
    ['Feb-2015', 1029471],
    ['Mar-2015', 687533],
    ['Apr-2015', -524626],
    ['May-2015', 158620],
    ['Jun-2015', 87795],
    ['Jul-2015', 423389],
    ['Aug-2015', 840723],
    ['Sep-2015', 568529],
    ['Oct-2015', 332067],
    ['Nov-2015', 989499],
    ['Dec-2015', 778237],
    ['Jan-2016', 650000],
    ['Feb-2016', -1100387],
    ['Mar-2016', -174946],
    ['Apr-2016', 757143],
    ['May-2016', 445709],
    ['Jun-2016', 712961],
    ['Jul-2016', -1163797],
    ['Aug-2016', 569899],
    ['Sep-2016', 768450],
    ['Oct-2016', 102685],
    ['Nov-2016', 795914],
    ['Dec-2016', 60988],
    ['Jan-2017', 138230],
    ['Feb-2017', 671099],
  ];

// HEADING

  console.log("Financial Analysis\n----------------");

// TOTAL MONTHS 

  let totalMonths = finances.length;   
  
    // finds and returns the amount of items in the finances array

  console.log("Total Months: " + totalMonths);

// NET TOTAL OF PROFIT AND LOSSES

  let netTotal = 0       
  
    // establishing the initial value  to later add on to

  for (let i = 0; i < totalMonths; i++) {
    netTotal += finances[i][1];
  }                                     
  
    // the loop will go through every index in the finances array and add the second item (the numbers) in each nested array together

  console.log("Total: $" + netTotal);

// AVERAGE CHANGE

  let differences = [];     
  
    // establishing the empty differences array to later add on to

  for (let i = 1; i < totalMonths; i++) {
    let difference = finances[i][1] - finances[i - 1][1];
    differences.push(difference);
  }                                     
  
    // the for loop will go through all the second items in the nested arrays and subtract the next from the previous to find the difference of each month from their respective previous months and adds the result to the differences array

  let averageChange =
    differences.reduce((accumulator, value) => accumulator + value, 0) / (totalMonths - 1);    

    // makes use of the reduce function to add each number in the differences array together and then divide the result by the amount of total months minus 1 because there are only 85 items in the differences array
  
  console.log("Average Change: " + averageChange.toFixed(2));     
  
    // uses .toFixed to change the result to two decimal points

// GREATEST INCREASE

  let highestAmount = Math.max(...differences);

    // finds the highest amount in the differences array by using the Math.max function

  let highestAmountMonth = [];

    // creates an empty array to later push on to

  for (let i = 0; i < totalMonths; i++) {
    if (i === differences.indexOf(highestAmount)) {
      let result = finances[i + 1][0]
      highestAmountMonth.push(result);
    }
  }

    // the for loop will go through all the indices in the differences array until it matches the index of the item stored in the highestAmount variable and once it has found the match, it matches that index to the month that is at the same index in the finances array (adding 1 to i to make up for the additional index) and then pushes that result to the highestAmountMonth array

  console.log(
    "Greatest Increase in Profits/Losses: " +
    highestAmountMonth + " ($" + highestAmount + ")"
  );

// GREATEST DECREASE

  let lowestAmount = Math.min(...differences);

    // finds the lowest amount in the differences array by using the Math.min function

  let lowestAmountMonth = [];

    // creates an empty array to later push on to

  for (let i = 0; i < totalMonths; i++) {
    if (i === differences.indexOf(lowestAmount)) {
      let result = finances[i + 1][0]
      lowestAmountMonth.push(result);
    }
  }

    // doing the same thing previously done for the greatest increase but using the lowest variables instead

  console.log(
    "Greatest Decrease in Profits/Losses: " +
    lowestAmountMonth + " ($" + lowestAmount + ")"
  )