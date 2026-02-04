/*he Challenge: The "Incident Priority Bump"
Scenario: You have an Incident that has been sitting open for too long. You need to find it by its Number and change its Short Description to reflect that it is now "URGENT" and set its Urgency to "High."

Goal: Write a script that:

Queries the incident table.

Finds the record with the Number "INC0000001".

Updates the Short Description by adding "[URGENT] " to the beginning.

Changes the Urgency value to 1 (which represents "High" in ServiceNow).

Saves the record. */

var incGR = new GlideRecord('incident');
incGR.addQuery('number', 'INC0000001');
incGR.query();

if (incGR.next()) {
    var currentDesc = incGR.getValue('short_description');
    incGR.short_description = "[URGENT] " + currentDesc;
    incGR.urgency = 1;
    incGR.update();
    gs.info('Updated: ' + incGR.number);
}