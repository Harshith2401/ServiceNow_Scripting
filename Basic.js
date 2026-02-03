/*The Challenge: The "VIP Check"
Scenario: You want to find a specific user in the system by their name and check if they are marked as a VIP. If they are, you want to print their email address to the console.

Goal: Write a background script that:

Queries the sys_user table.

Finds the record where the Name is "Abraham Lincoln".

Checks if the VIP field is true.

Logs the email address. */

// 1. Initialize the GlideRecord object for the 'sys_user' table
var userGR = new GlideRecord('sys_user');

// 2. Add a filter to find the specific user
userGR.addQuery('name', 'Abraham Lincoln');

// 3. Execute the query
userGR.query();

// 4. Check if a record was found
if (userGR.next()) {
    
    // 5. Check if the user is a VIP
    if (userGR.vip == true) {
        gs.info('User is a VIP. Email: ' + userGR.email);
    } else {
        gs.info('User found, but is not a VIP.');
    }
    
} else {
    gs.info('No user found with 그 name.');
}


/*Why this works:
new GlideRecord('table_name'): This tells the system which "bucket" of data you are looking at.

addQuery('field', 'value'): This is like your SQL WHERE clause.

query(): This actually sends the request to the database.

next(): This moves the "cursor" to the first record returned. Without this, you can't access the data!

gs.info(): This is the standard way to print messages to the ServiceNow log.*/Basics