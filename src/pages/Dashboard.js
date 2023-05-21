import React, { useState, useEffect } from "react";
import ls from "local-storage";

export default function Dashboard(props) {
  const [admin, setAdmin] = useState({});
  useEffect(() => {
    let adminTemp = {...admin};
    adminTemp = JSON.parse(ls.get("admin"));
    setAdmin(adminTemp);
    if (adminTemp === null) {
        window.location.href = "/?error=login";
    } else {
      if (Object.keys(adminTemp).length === 0) {
        window.location.href = "/?error=login";
      }
    }
  }, [setAdmin]);
  return <></>;
}
