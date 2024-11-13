<template>
  <a-table
    :columns="columns"
    :data-source="alarmData"
    :row-selection="rowSelection"
    :pagination="false"
    :scroll="{ y: 130 }"
    :row-key="(record) => record.name"
    bordered
    :customRow="customRow"
    size="small"
  >
  </a-table>
</template>

<script setup>
const columns = [
  {
    title: "Current Status",
    dataIndex: "status",
    width: "10%",
  },
  {
    title: "System",
    dataIndex: "system",
    width: "10%",
  },
  {
    title: "Alarm Code",
    dataIndex: "code",
    width: "15%",
  },
  {
    title: "Description",
    dataIndex: "description",
    width: "15%",
  },
  {
    title: "Time",
    dataIndex: "time",
    width: "20%",
  },
];

const alarmData = [
  {
    status: `Normal`,
    system: `Engine`,
    code: `E-002`,
    description: `Engine Start`,
    time: `2024.02.02T10:15:51`,
  },
  {
    status: `Normal`,
    system: `Engine`,
    code: `E-002`,
    description: `Engine Start`,
    time: `2024.02.02T10:15:51`,
  },
  {
    status: `Normal`,
    system: `Engine`,
    code: `E-002`,
    description: `Engine Start`,
    time: `2024.02.02T10:15:51`,
  },
  {
    status: `Normal`,
    system: `Engine`,
    code: `E-002`,
    description: `Engine Start`,
    time: `2024.02.02T10:15:51`,
  },
  {
    status: `Normal`,
    system: `Engine`,
    code: `E-002`,
    description: `Engine Start`,
    time: `2024.02.02T10:15:51`,
  },
  {
    status: `Normal`,
    system: `Engine`,
    code: `E-002`,
    description: `Engine Start`,
    time: `2024.02.02T10:15:51`,
  },
];

</script>

<style scoped></style>
