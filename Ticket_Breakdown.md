# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1) First of all Modify the Agents table migration (add column agent_slug or custom_agent_id) varchar 256 nullable unique. (Time required 2 hour)
2) To reference the (agent_slug or custom_agent_id) of the agent in the Facilities table we need to modify this table, upadte the (agent_id column with custom_agent_id) also update the Foreign key constaints. (Time required 2 hours)
3) Facility add(new) there could be two use cases: (8 hours means two story points)
    i) During facility add we allow users to select the agent (by some drop down, we will laod the agents and use the value of the custom_agent_id in our post request, to refrence it with Facility table.
    ii) When we select an agent from drop down, we allow users to create a new slug or custom_agent_id using input field. Before Facility add we will update the agent table first with the newly created custom id and use it in Facility create request. 

Note: There is a constraint, either we wants one custom_agent_id with facility id (Facility belongs to agent id), If we wants manay to many relationsip then we can use a pivot table to manage the facility_id, custom_agent_id, agent_id 

Solution:
If I rewrite this solutions then I will use slugs in each table (I will not use the database id directly), In node js i can use uuid package to generate slugs for each table and reference them (if im using MySQL, If I'm using Mongodb then I will use the _id refrence in Facilities and Shifts tables).

Using MySQL:
Add Facility:
1) Generate new migration to manage the agent_custom_id in agents and facilities tables.
2) During Add Facility (load all agents in database).
3) Allow users to pick agents and dynamically show the input field for custom_agent_id name it Custom Agent id.
4) User will type the agent unique id(varchar).
5) Save agent (first it will update the agent_custom_id in agents table) (using transactions to rollback in case of any error) use the agent_custom_id and save it in facilities table.
6) I can query in facilities table by agent_custom_id and get facilities with agent meta data.


Using MongoDB or any schemaless database:
1) During Add Facility (load all agents in database).
3) Allow users to pick agent and dynamically show the input field Custom Agent id(text field).
4) User will type the agent unique id(varchar).
5) Save the Facility and agent data in object (using embed approach in collection) like
{
    __id:
    facility_title: varchar
    agent: {
        // clone all data of agent (this will be embed approach)
        name: varchar
        email: varchar
        custom_agent_id: varchar
    }
}
