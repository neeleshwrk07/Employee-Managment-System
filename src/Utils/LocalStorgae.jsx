const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix Navigation Bug",
        "taskDescription": "Resolve the issue where the mobile navbar overlaps with the hero section.",
        "taskDate": "2026-08-05",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update User Schema",
        "taskDescription": "Add the new role field to the database schema for the upcoming feature.",
        "taskDate": "2026-08-01",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "API Integration",
        "taskDescription": "Integrate the third-party payment gateway API.",
        "taskDate": "2026-07-28",
        "category": "Integration"
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Q3 Marketing Campaign",
        "taskDescription": "Draft the initial proposal for the Q3 social media marketing push.",
        "taskDate": "2026-08-10",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Competitor Analysis",
        "taskDescription": "Compile a report on the top 3 competitors' recent product launches.",
        "taskDate": "2026-08-02",
        "category": "Research"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Update Ad Copy",
        "taskDescription": "Revise the Google Ads copy to improve the click-through rate.",
        "taskDate": "2026-08-06",
        "category": "Advertising"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Client Onboarding Video",
        "taskDescription": "Record a screen-share tutorial for new client onboarding.",
        "taskDate": "2026-07-30",
        "category": "Content Creation"
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Process Payroll",
        "taskDescription": "Ensure all employee hours are logged and payroll is processed for July.",
        "taskDate": "2026-07-31",
        "category": "Finance"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Update Employee Handbook",
        "taskDescription": "Incorporate the new remote work policies into the official handbook.",
        "taskDate": "2026-08-15",
        "category": "HR"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Schedule Interviews",
        "taskDescription": "Coordinate interview times for the 5 shortlisted frontend developer candidates.",
        "taskDate": "2026-08-07",
        "category": "Recruitment"
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Server Maintenance",
        "taskDescription": "Perform routine patching and updates on the production servers.",
        "taskDate": "2026-08-01",
        "category": "IT Support"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Resolve Ticket #8492",
        "taskDescription": "Assist the sales team with the VPN connectivity issue.",
        "taskDate": "2026-08-04",
        "category": "Helpdesk"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Audit System Logs",
        "taskDescription": "Review the July access logs for any suspicious activity.",
        "taskDate": "2026-08-08",
        "category": "Security"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Deploy Staging Environment",
        "taskDescription": "Set up a new isolated staging environment for the beta testers.",
        "taskDate": "2026-07-25",
        "category": "DevOps"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Backup Database",
        "taskDescription": "Perform a manual full backup of the primary database cluster.",
        "taskDate": "2026-08-03",
        "category": "Database"
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Draft NDA Templates",
        "taskDescription": "Create a standardized Non-Disclosure Agreement for external contractors.",
        "taskDate": "2026-08-09",
        "category": "Legal"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Review Vendor Contract",
        "taskDescription": "Review the terms of service renewal for the cloud hosting provider.",
        "taskDate": "2026-08-02",
        "category": "Legal"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Compliance Audit Prep",
        "taskDescription": "Gather necessary documentation for the upcoming SOC2 compliance audit.",
        "taskDate": "2026-08-20",
        "category": "Compliance"
      }
    ]
  }
];

const admin = [
  {
    "id": 99,
    "email": "admin@example.com",
    "password": "123"
  }
];


export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))
    

    return {employees, admin}
    
}

