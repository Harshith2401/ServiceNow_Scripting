/*The Challenge: The "State Cleanup"
Scenario: You want to find all Incidents that are either in the "On Hold" state or the "Resolved" state.

Goal:

Query the incident table.

Filter for state is 3 (On Hold).

Add an "OR" condition for state is 6 (Resolved).

Print the total number found. */

var incGR = new GlideRecord('incident');
var orCond = incGR.addQuery('state', 3);
orCond.addOrCondition('state', 6);
incGR.query();

gs.info('Total matching incidents: ' + incGR.getRowCount());