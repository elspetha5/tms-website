import { useEffect, useState } from "react";

import Section from "../../components/section/section";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner";

import { getSparesInventory } from "../../shared/queries";
import { useAuth } from "../../shared/contexts/auth-context";
import { UseAuth } from "../../shared/types";
import { getTenantId } from "../../shared/utils";

import "./spares-inventory.scss";

function SparesInventory() {
  const { currentUser } = useAuth() as UseAuth;
  const [spares, setSpares] = useState<[]>();

  async function getSpares() {
    const data = await getSparesInventory(getTenantId(currentUser));
    if (data) {
      setSpares(data);
      console.log(data);
    } else {
      console.log("no data");
    }
  }

  useEffect(() => {
    if (currentUser) {
      getSpares();
    }
  }, [currentUser]);

  return (
    <Section title="Spares Inventory">
      {spares && spares.length > 0 ? <div>spares</div> : <LoadingSpinner />}
    </Section>
  );
}

export default SparesInventory;
