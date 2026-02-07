/*The Challenge: The "Manager Lookup"
Scenario: You have a user’s name, and you need to find out who their manager is and what that manager’s phone number is.

Goal:

Query the sys_user table for "Abraham Lincoln".

Access the Manager field (which is a Reference field).

Print the Manager's name and their business phone. */

var userGR = new GlideRecord('sys_user');
userGR.addQuery('name', 'Abraham Lincoln');
userGR.query();

if (userGR.next()) {
    var managerName = userGR.manager.name;
    var managerPhone = userGR.manager.phone;
    
    gs.info('Manager: ' + managerName + ' | Phone: ' + managerPhone);
}