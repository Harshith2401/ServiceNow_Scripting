/*The Challenge: The "Critical Count"
Scenario: You need to count how many Active and Critical Priority (Priority 1) incidents currently exist in the system.

Goal:

Query the incident table.

Filter for active is true.

Filter for priority is 1.

Print the total count. */

var countGR = new GlideRecord('incident');
countGR.addQuery('active', true);
countGR.addQuery('priority', 1);
countGR.query();

gs.info('Total Critical Incidents: ' + countGR.getRowCount());