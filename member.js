function skillsMember()
{
    var member = document.getElementById("member").value;
    var memberArray = member.split(",");
    var memberArrayLength = memberArray.length;
    var memberArraySum = 0;
    for (var i = 0; i < memberArrayLength; i++)
    {
        memberArraySum += parseInt(memberArray[i]);
    }
    var memberArrayAverage = memberArraySum / memberArrayLength;
    document.getElementById("memberResult").innerHTML = "The average of the numbers you entered is " + memberArrayAverage;
}