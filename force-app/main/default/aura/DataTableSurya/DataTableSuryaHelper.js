({
fetchAccHelper : function(component, event, helper) {
component.set('v.mycolumns', [
            {label: 'Account Name', fieldName: 'Name', type: 'text'},
                {label: 'Industry', fieldName: 'Industry', type: 'text'},
                {label: 'Phone', fieldName: 'Phone', type: 'Phone'}
            ]);
var action = component.get("c.fetchAccounts");
action.setParams({
        });
action.setCallback(this, function(response){
var state = response.getState();
if (state === "SUCCESS") {
component.set("v.myrows", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
})