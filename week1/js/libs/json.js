// Mobile Interfaces and Usability: (MIU)
// Term: 1210
// Project: 4
// Author: Mark McAninch

var json = {
      "vehicle1": {
         "fname": ["First Name:", "Mark"],
         "lname": ["Last Name:", "McAninch"],
         "date": ["Date:", "9-14-2012"],
         "vehicle": ["Vehicle:", "GM"],
         "year": ["Year:", "1975"],
         "email": ["Email:", "awacs68@fullsail.edu"],
         "miles": ["Miles:", "4000"],
         "comments": ["Comments:", "Changed the oil"],
      },
      "vehicle2": {
         "fname": ["First Name:", "Jan"],
         "lname": ["Last Name:", "McAninch"],
         "date": ["Date:", "9-11-2012"],
         "vehicle": ["Vehicle:", "GM"],
         "year": ["Year:", "2008"],
         "email": ["Email:", "awacs68@cox.net"],
         "miles": ["Miles:", "3000"],
         "comments": ["Comments:", "Changed the oil, and air filter"],
      },
      "vehicle3": {
         "fname": ["First Name:", "Ashley"],
         "lname": ["Last Name:", "Beatty"],
         "date": ["Date:", "9-15-2012"],
         "vehicle": ["Vehicle:", "GM"],
         "year": ["Year:", "1998"],
         "email": ["Email:", "awacs68@cox.net"],
         "miles": ["Miles:", "5000"],
         "comments": ["Comments:", "Changed oil, fuel, and air filter"]
      },
      "vehicle4": {
         "fname": ["First Name:", "Bri-Ann"],
         "lname": ["Last Name:", "Beatty"],
         "date": ["Date:", "9-15-2012"],
         "vehicle": ["Vehicle:", "GM"],
         "year": ["Year:", "1995"],
         "email": ["Email:", "awacs68@cox.net"],
         "miles": ["Miles:", "2000"],
         "comments": ["Comments:", "Changed oil"]
      },
      "vehicle5": {
         "fname": ["First Name:", "Austin"],
         "lname": ["Last Name:", "McAninch"],
         "date": ["Date:", "9-15-2012"],
         "vehicle": ["Vehicle:", "GM"],
         "year": ["Year:", "1999"],
         "email": ["Email:", "awacs68@cox.net"],
         "miles": ["Miles:", "3000"],
         "comments": ["Comments:", "Changed oil"]
      },
      "vehicle6": {
         "fname": ["First Name:", "Robin"],
         "lname": ["Last Name:", "Alarcon"],
         "date": ["Date:", "9-25-2012"],
         "vehicle": ["Vehicle:", "Hyundai"],
         "year": ["Year:", "2009"],
         "email": ["Email:", "rgroffalarcon@fullsail.edu"],
         "miles": ["Miles:", "3000"],
         "comments": ["Comments:", "Changed oil"]
      },
      "vehicle7": {
         "fname": ["First Name:", "Thomas"],
         "lname": ["Last Name:", "Harrison"],
         "date": ["Date:", "9-25-2012"],
         "vehicle": ["Vehicle:", "Hyundai"],
         "year": ["Year:", "2005"],
         "email": ["Email:", "awacs68@cox.net"],
         "miles": ["Miles:", "4000"],
         "comments": ["Comments:", "Changed oil"]
      },
      "vehicle8": {
         "fname": ["First Name:", "Brett"],
         "lname": ["Last Name:", "Brookshire"],
         "date": ["Date:", "9-25-2012"],
         "vehicle": ["Vehicle:", "Hyundai"],
         "year": ["Year:", "2006"],
         "email": ["Email:", "awacs68@cox.net"],
         "miles": ["Miles:", "2000"],
         "comments": ["Comments:", "Changed oil"]
      },
      "vehicle9": {
         "fname": ["First Name:", "Michelle"],
         "lname": ["Last Name:", "Deis"],
         "date": ["Date:", "9-25-2012"],
         "vehicle": ["Vehicle:", "Hyundai"],
         "year": ["Year:", "2012"],
         "email": ["Email:", "awacs68@cox.net"],
         "miles": ["Miles:", "2000"],
         "comments": ["Comments:", "Changed oil"]
      },
      "vehicle10": {
         "fname": ["First Name:", "Michelle"],
         "lname": ["Last Name:", "Deis"],
         "date": ["Date:", "9-26-2012"],
         "vehicle": ["Vehicle:", "Hyundai"],
         "year": ["Year:", "2012"],
         "email": ["Email:", "awacs68@cox.net"],
         "miles": ["Miles:", "2000"],
         "comments": ["Comments:", "Changed oil"]
      },
      "vehicle11": {
         "fname": ["First Name:", "Jimmy"],
         "lname": ["Last Name:", "Sutherland"],
         "date": ["Date:", "9-27-2012"],
         "vehicle": ["Vehicle:", "Ford"],
         "year": ["Year:", "2010"],
         "email": ["Email:", "awacs68@cox.net"],
         "miles": ["Miles:", "2000"],
         "comments": ["Comments:", "Changed oil, and Airfilter"]
      },
      "vehicle12": {
         "fname": ["First Name:", "Brooke"],
         "lname": ["Last Name:", "Sutherland"],
         "date": ["Date:", "9-27-2012"],
         "vehicle": ["Vehicle:", "Ford"],
         "year": ["Year:", "2004"],
         "email": ["Email:", "awacs68@cox.net"],
         "miles": ["Miles:", "3000"],
         "comments": ["Comments:", "Changed oil, and Airfilter"]
      },
      "vehicle13": {
         "fname": ["First Name:", "Samantha"],
         "lname": ["Last Name:", "Tharp"],
         "date": ["Date:", "9-27-2012"],
         "vehicle": ["Vehicle:", "Ford"],
         "year": ["Year:", "2011"],
         "email": ["Email:", "awacs68@cox.net"],
         "miles": ["Miles:", "2000"],
         "comments": ["Comments:", "Changed oil, and Airfilter"]
      },
      "vehicle14": {
         "fname": ["First Name:", "Brittany"],
         "lname": ["Last Name:", "Deis"],
         "date": ["Date:", "9-27-2012"],
         "vehicle": ["Vehicle:", "Ford"],
         "year": ["Year:", "2003"],
         "email": ["Email:", "awacs68@cox.net"],
         "miles": ["Miles:", "6000"],
         "comments": ["Comments:", "Changed oil, and Airfilter"]
      },
      "vehicle15": {
         "fname": ["First Name:", "Dustin"],
         "lname": ["Last Name:", "Deis"],
         "date": ["Date:", "9-28-2012"],
         "vehicle": ["Vehicle:", "Ford"],
         "year": ["Year:", "2003"],
         "email": ["Email:", "awacs68@cox.net"],
         "miles": ["Miles:", "5000"],
         "comments": ["Comments:", "Changed oil, and Airfilter"]
      },
      "vehicle16": {
         "fname": ["First Name:", "David"],
         "lname": ["Last Name:", "Brown"],
         "date": ["Date:", "9-29-2012"],
         "vehicle": ["Vehicle:", "Chrysler"],
         "year": ["Year:", "2011"],
         "email": ["Email:", "awacs68@cox.net"],
         "miles": ["Miles:", "2000"],
         "comments": ["Comments:", "Changed oil, and Airfilter"]
      },
      "vehicle17": {
         "fname": ["First Name:", "Nichole"],
         "lname": ["Last Name:", "Deis"],
         "date": ["Date:", "9-29-2012"],
         "vehicle": ["Vehicle:", "Chrysler"],
         "year": ["Year:", "2010"],
         "email": ["Email:", "awacs68@cox.net"],
         "miles": ["Miles:", "3000"],
         "comments": ["Comments:", "Changed oil, and Airfilter"]
      },
      "vehicle18": {
         "fname": ["First Name:", "Sabrina"],
         "lname": ["Last Name:", "McAninch"],
         "date": ["Date:", "9-29-2012"],
         "vehicle": ["Vehicle:", "Chrysler"],
         "year": ["Year:", "2012"],
         "email": ["Email:", "awacs68@cox.net"],
         "miles": ["Miles:", "3000"],
         "comments": ["Comments:", "Changed oil, and Airfilter"]
      },
      "vehicle19": {
         "fname": ["First Name:", "Erin"],
         "lname": ["Last Name:", "McAninch"],
         "date": ["Date:", "9-29-2012"],
         "vehicle": ["Vehicle:", "Chrysler"],
         "year": ["Year:", "2011"],
         "email": ["Email:", "awacs68@cox.net"],
         "miles": ["Miles:", "4000"],
         "comments": ["Comments:", "Changed oil, and Airfilter"]
      },
      "vehicle20": {
         "fname": ["First Name:", "Sara"],
         "lname": ["Last Name:", "McAninch"],
         "date": ["Date:", "9-29-2012"],
         "vehicle": ["Vehicle:", "Chrysler"],
         "year": ["Year:", "2009"],
         "email": ["Email:", "awacs68@cox.net"],
         "miles": ["Miles:", "4000"],
         "comments": ["Comments:", "Changed oil, and Airfilter"]
      }

       }


   




