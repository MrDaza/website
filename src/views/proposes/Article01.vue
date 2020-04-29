<template>
  <section class="spacer-double-lg mt-5 mt-sm-0 none-v">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="mt-1">
            <h2 class="display-4 text-center text-primary font-weight-bold">
              Novel Coronavirus (2019-nCoV) Data Repository
            </h2>
            <p class="lead">
              <strong class="font-weight-bold">
                The COVID-19 Colombia Project
              </strong>
              collects and publishes a series of data files with cumulative
              counts of coronavirus cases. The databases designed can be used to
              power any dashboard and serve in reporting tracking the virus for
              Colombia departments, municipalities, and cities.
            </p>
            <p class="lead">
              The data record begins with the first reported coronavirus case in
              <strong class="font-weight-bold">BOGOTA on Mar. 06, 2020.</strong>
              The data is based on reports the
              <strong class="font-weight-bold">
                Ministry of Health (MINSALUD)
              </strong>
              and local news to provide a complete record of the ongoing
              outbreak
            </p>
            <p class="lead">
              These datasets are being made available to the public interested
              as well as researchers, scientists, and government officials who
              would like to understand the outbreak better.
            </p>
            <p class="lead">
              <strong class="font-weight-bold">
                The COVID-19 Colombia Project
              </strong>
              proposes a novel coronavirus dataset that contains:
            </p>
            <ul class="lead">
              <li>
                Daily case reports with epidemiological indicators, such as
                mortality rate, hospitalization rate, active cases, total people
                hospitalized, among others.
              </li>
              <li>
                Time series files related to the cases confirmed, death, and
                recovered, respectively. For each file, each column of data
                includes the cumulative count from cases during the day.
              </li>
              <li>
                The daily case reports and time series contain a standard
                geographic identifier (latitude and longitude), to make it
                easier for an analyst to combine this data with other data sets
                like a map file or population data.
              </li>
              <li>
                The MINSALUD and INS provide folders with the COVID-19
                official's reports. Additionally, a summary file with the daily
                official reports. This information is an excellent complement to
                our daily report.
              </li>
              <li>
                The information from COVID-19 official' reports has been cleaned
                and re-formatted to address inconsistencies in the time zone,
                update frequency, among other things more. All data is based on
                delivered through at official web sites and communications
                media.
              </li>
            </ul>
          </div>
        </div>
        <GoToGithub></GoToGithub>
      </div>
    </div>
  </section>
</template>

<script>
import GoToGithub from "@/components/GoToGithub";
export default {
  name: "Article01",
  components: {
    GoToGithub
  },
  mounted() {
    this.loader();
  },
  methods: {
    loader: () => {
      window.$("section").fadeIn();
    }
  }
};
</script>
