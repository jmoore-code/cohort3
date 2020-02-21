# Tax Calculator


def taxCalculator(num1):
    income = {
        "tier1": 47630,
        "tier2": 47629,
        "tier3": 52408,
        "tier4": 62704
    }

    tax = {
        "tier1": 0.15,
        "tier2": 0.205,
        "tier3": 0.26,
        "tier4": 0.29,
        "tier5": 0.33
    }
    if (num1 <= income["tier1"]):
        return num1 * tax["tier1"]
    elif (num1 <= (income["tier1"] + income["tier2"])):
        return (num1 - income["tier1"]) * tax["tier2"] + income["tier1"] * tax["tier1"]
    elif (num1 <= (income["tier1"] + income["tier2"] + income["tier3"])):
        return (num1 - (income["tier1"] + income["tier2"])) * tax["tier3"] + income['tier2'] * tax['tier2'] + income["tier1"] * tax["tier1"]
    elif (num1 <= (income["tier1"] + income["tier2"] + income["tier3"] + income["tier4"])):
        return (num1 - (income["tier1"] + income["tier2"] + income["tier3"])) * tax["tier4"] + income['tier3'] * tax['tier3'] + income['tier2'] * tax['tier2'] + income["tier1"] * tax["tier1"]
    else:
        return (num1 - (income["tier1"] + income["tier2"] + income["tier3"] + income["tier4"])) * tax["tier5"] + income['tier4'] * tax['tier4'] + income['tier3'] * tax['tier3'] + income['tier2'] * tax['tier2'] + income["tier1"] * tax["tier1"]