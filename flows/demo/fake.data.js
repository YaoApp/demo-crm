function main() {
  return {
    Admin: admin(),
    Channel: channel(),
    Customer: customer(),
    Project: project(),
    Tasks: tasks(),
    Contract: contract(),
    User: user(),
  };
}

// Channel Data
function channel() {
  return [
    { name: "Ebay", link: "https://www.ebay.com/" },
    { name: "Amazon", link: "https://www.amazon.com/" },
    { name: "Facebook", link: "https://www.facebook.com/" },
  ];
}

// Admin Data
function admin() {
  return [
    {
      name: "Tyler Kwon",
      type: "admin",
      email: "xiang@iqka.com",
      mobile: null,
      password: "A123456p+",
      status: "enabled",
      extra: {},
    },
    {
      name: "Alfonso Morales",
      type: "staff",
      email: "staff@iqka.com",
      mobile: null,
      password: "S123456p+",
      status: "enabled",
      extra: {},
    },
  ];
}

// Customer Data
function customer() {
  return [
    {
      channel_id: 1,
      name: "Schroder Associates, LLC",
      short_name: "Schroder",
      credit_no: "91110000745467123H",
      oper_name: "Robert Montez",
      reg_capi: 7753.64,
      opened_at: "2002-12-03",
      province: "Illinois",
      city: "Dolton",
      address: "9230 E Altadena Ave Scottsdale United States",
      company_status: "开业",
      summary:
        "All consumer goods, Unique items, hopefully exclusive, Home and garage storage items, outdoor living, automotive accessories,toys, golf products, home furnishings are some categories, Confections",
      link: "http://www.navinfo.com/",
      contact_name: "Robert Montez",
      contact_mobile: "1-503-422-1899",
      contact_wechat: "1-503-422-1899",
      fields: ["IoT"],
      industries: ["Technology", "Automobile"],
      tags: ["New Energy"],
      relation: "Connecting",
    },
    {
      channel_id: 2,
      name: "Restoration Media Inc.",
      short_name: "Restoration",
      credit_no: "91110102306636909Q",
      oper_name: "Attila Soos",
      reg_capi: 502000,
      opened_at: "2007-07-25",
      province: "New York",
      city: "Holbrook",
      address: "865 Broadway Avenue# 66a Holbrook United States",
      company_status: "Open",
      summary:
        "Main Products:Apparel, electronics,toys, sports goods, Industrial supplies, Minerals Materials etc.",
      link: "",
      contact_name: "Attila Soos",
      contact_mobile: "1-631-234-7706",
      contact_wechat: "1-631-234-706",
      fields: ["Estate"],
      industries: ["Estate", "Energy"],
      tags: ["IoT"],
      relation: "Regular",
    },
    {
      channel_id: 3,
      name: "Ev1Shopping INC.",
      short_name: "Ev1",
      credit_no: "91130000104321300A",
      oper_name: "William Kerson",
      reg_capi: 2009517.619984,
      opened_at: "1989-11-20",
      province: "North Carolina",
      city: "Wilson",
      address: "Main Products:Laptop, phones,electronics",
      company_status: "Open",
      summary: "Main Products:Laptop, phones,electronics",
      link: "www.ev1shopping.com",
      contact_name: "William Kerson",
      contact_mobile: "1-336-2177989",
      contact_wechat: "",
      fields: ["Power"],
      industries: ["Energy", "IoT"],
      tags: ["IoT"],
      relation: "Potential",
    },
  ];
}

// Project Data
function project() {
  return [
    {
      customer_id: 1,
      biz_id: 1,
      tech_id: 2,
      name: "Medical Image Storage and Transmission System",
      summary: "PACS server system, video workstation system",
      desc: "Need to include the following functions, ready-made products, ultrasound information management system, worklist system",
      priority: "C",
      suitability: "60",
      intention: "40",
      process: "Connected",
      budget: 4.5,
      cost_get: 100,
      cost_op: 1000,
      contact_name: "mayunio",
      contact_title: "CTO",
      contact_mobile: "1-310-972-9360",
    },
    {
      customer_id: 2,
      biz_id: 1,
      tech_id: 2,
      name: "Smart City Waste Collection System",
      summary: "Smart City Waste Collection System",
      desc: "Municipal engineering garbage recycling automatic collection and reporting",
      priority: "A",
      suitability: "100",
      intention: "100",
      process: "Paid",
      budget: 15,
      cost_get: 100,
      cost_op: 1000,
      contact_name: "Hamish Mekras",
      contact_title: "CTO",
      contact_mobile: "1-723-25543187",
    },
    {
      customer_id: 2,
      biz_id: 1,
      tech_id: 2,
      name: "Industrial Intelligent Manufacturing ERP",
      summary: "Industrial Intelligent Manufacturing ERP",
      desc: "Industrial Intelligent Manufacturing ERP",
      priority: "B",
      suitability: "100",
      intention: "20",
      process: "Docking",
      budget: 10,
      cost_get: 100,
      cost_op: 1000,
      contact_name: "David Cahn",
      contact_title: "Manager",
      contact_mobile: "1-775-5628585",
    },
    {
      customer_id: 3,
      biz_id: null,
      tech_id: null,
      name: "Unmanned flying robot",
      summary: "Unmanned flying robot",
      desc: "Unmanned flying robot",
      priority: "C",
      suitability: "0",
      intention: "0",
      process: "Connecting",
      budget: 0.5,
      cost_get: 100,
      cost_op: 1000,
      contact_name: "James",
      contact_title: "Team Leader",
      contact_mobile: "1-310-768-3038",
    },
  ];
}

// Tasks Data
function tasks() {
  return [
    {
      project_id: 1,
      user_id: 1,
      name: "Pre-sales demand analysis technical support",
      summary: "Pre-sales demand analysis technical support",
      plan: "2021-11-12 15:30:00",
      priority: "A",
      status: "Create",
    },
    {
      project_id: 3,
      user_id: 1,
      name: "Apply custom labor assessments",
      summary: "Apply custom labor assessments",
      plan: "2021-11-13 15:30:00",
      priority: "B",
      status: "Pending",
    },
    {
      project_id: 2,
      user_id: 1,
      name: "Application custom development",
      summary: "Application custom development",
      plan: "2021-11-10 19:00:00",
      priority: "C",
      status: "Completed",
    },
    {
      project_id: 3,
      user_id: 2,
      name: "Contact the leaders of Party A to communicate the budget adjustment plan",
      summary: "Budget raised to 200,000",
      plan: "2021-11-14 19:00:00",
      priority: "B",
      status: "Create",
    },
  ];
}

// Contract Data
function contract() {
  return [
    {
      project_id: 2,
      user_id: 1,
      sign_at: "2021-10-24 08:00:00",
      expired_at: "2022-10-24 08:00:00",
      status: "Signed",
    },
  ];
}

// User Data
function user() {
  return [
    {
      id: 1,
      name: "Robert",
      nickname: "Victor",
      mobile: "1-917-720 3352",
      password: "A+123abc",
    },
    {
      id: 2,
      name: "Julian",
      nickname: "Victor",
      mobile: "1-818-667-1507",
      password: "A+123abc",
    },
  ];
}
