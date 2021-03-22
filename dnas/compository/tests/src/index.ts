import {
  Orchestrator,
  Config,
  InstallAgentsHapps,
  TransportConfigType,
  NetworkType,
} from "@holochain/tryorama";
import path from "path";

const network = {
  transport_pool: [
    {
      type: TransportConfigType.Quic,
    },
  ],
  bootstrap_service: "https://bootstrap-staging.holo.host",
  network_type: NetworkType.QuicBootstrap,
};
const conductorConfig = Config.gen({ network });

// Construct proper paths for your DNAs
const compositoryDna = path.join(__dirname, "../workdir/compository.dna");

// create an InstallAgentsHapps array with your DNAs to tell tryorama what
// to install into the conductor.
const installation: InstallAgentsHapps = [
  // agent 0
  [
    // happ 0
    [compositoryDna],
  ],
];

const sleep = (ms) =>
  new Promise((resolve) => setTimeout(() => resolve(null), ms));

const orchestrator = new Orchestrator();

orchestrator.registerScenario("create a dna template and and instance of it", async (s, t) => {
  const [alice, bob] = await s.players([conductorConfig, conductorConfig]);

  // install your happs into the coductors and destructuring the returned happ data using the same
  // array structure as you created in your installation array.
  const [[alice_compository]] = await alice.installAgentsHapps(installation);
  const [[bob_compository]] = await bob.installAgentsHapps(installation);

  const instantiated_dna_hash =
    "uhC0kR4IsGT58vinsvVCc3ItFwMSzYFl16znsEhRgHqHmzIjvQL02";

  let dnaTemplateHash = await alice_compository.cells[0].call(
    "compository",
    "publish_dna_template",
    {
      name: "aha",
      zome_defs: [],
    }
  );
  t.ok(dnaTemplateHash);
  await alice_compository.cells[0].call(
    "compository",
    "publish_instantiated_dna",
    {
      dna_template_hash: dnaTemplateHash,
      instantiated_dna_hash,
      uuid: "",
      properties: [],
    }
  );

  await sleep(5000);

  const template = await bob_compository.cells[0].call(
    "compository",
    "get_template_for_dna",
    instantiated_dna_hash
  );

  t.ok(template);
});

orchestrator.run();
