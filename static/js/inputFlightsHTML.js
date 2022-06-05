export const roundtripInputHTML = `
<div class="row g-2 justify-content-center" id="search-inputs">
  <div class="col-lg-3">
    <select
      class="form-select form-select-lg mb-3"
      aria-label=".form-select-lg example"
    >
      <option selected>Leaving from</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <div class="col-lg-3">
    <select
      class="form-select form-select-lg mb-3"
      aria-label=".form-select-lg example"
    >
      <option selected>Going to</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <div class="col-lg-4 d-flex justify-content-center" id="date-input-container">
    <div class="col-5 mx-1">
      <input
        class="form-control form-select-lg mb-3 col"
        type="text"
        placeholder="Departure date"
        id="fs-departDate"
      />
    </div>
    <div class="col-5 mx-1">
      <input
        class="form-control form-select-lg mb-3 col"
        type="text"
        id="fs-returnDate"
        placeholder="Return date"
      />
    </div>
  </div>
</div>`;

export const onewayInputHTML = `
<div class="row g-2 justify-content-center" id="search-inputs">
            
<div class="col-lg-3">
  <select
    class="form-select form-select-lg mb-3"
    aria-label=".form-select-lg example"
  >
    <option selected>Leaving from</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
<div class="col-lg-3">
  <select
    class="form-select form-select-lg mb-3"
    aria-label=".form-select-lg example"
  >
    <option selected>Going to</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
<div class="col-lg-4 d-flex justify-content-center" id="date-input-container">

  <div class="col-8 mx-1">
    <input
      class="form-control form-select-lg mb-3 col"
      type="text"
      placeholder="Departure date"
      id="fs-departDate"
    />
  </div>
</div>`;

export const multiportInputHTML = `
<div class="row g-2 justify-content-center" id="search-inputs">
            <div class="row p-0 multi-port-shuttle-count">
              <div class="col offset-1"><h6>Shuttle 1</h6></div>
            </div>
            <div class="col-lg-3">
              <select
                class="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
              >
                <option selected>Leaving from</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col-lg-3">
              <select
                class="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
              >
                <option selected>Going to</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col-lg-4 d-flex justify-content-center" id="date-input-container">
              <div class="col-8 mx-1">
                <input
                  class="form-control form-select-lg mb-3 col"
                  type="text"
                  placeholder="Departure date"
                  id="fs-departDate"
                />
              </div>
            </div>
          </div>

          <div class="row g-2 justify-content-center" id="search-inputs">
            <div class="row p-0 multi-port-shuttle-count">
              <div class="col offset-1"><h6>Shuttle 2</h6></div>
            </div>
            <div class="col-lg-3">
              <select
                class="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
              >
                <option selected>Leaving from</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col-lg-3">
              <select
                class="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
              >
                <option selected>Going to</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col-lg-4 d-flex justify-content-center" id="date-input-container">
              <div class="col-8 mx-1">
                <input
                  class="form-control form-select-lg mb-3 col"
                  type="text"
                  placeholder="Departure date"
                  id="fs-departDate"
                />
              </div>
            </div>
          </div>
`;
