import { EnterprisePage } from "@/components/dashboard/EnterprisePage";

export default function SettingsPage() {
  return (
    <EnterprisePage
      label="Settings"
      title="Platform Settings"
      desc="Configure profile, notifications, account preferences and workspace settings."
      cards={[
        { title: "Profile Settings", desc: "Update name, email, language and timezone.", tag: "Profile" },
        { title: "Security", desc: "Manage login, logout, roles and account security.", tag: "Trust" },
        { title: "Notifications", desc: "Control updates for RFQs, approvals and messages.", tag: "Alerts" },
      ]}
    />
  );
}