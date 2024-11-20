describe('Data Fetching Functions', function() {

 

  it('should display "This is a sample text file" in #output when getText is called', async function (done) {
    // Mock the fetch response to return the specific text
    spyOn(window, 'fetch').and.returnValue(
      Promise.resolve(new Response('This is a sample text file'))
    );

    // Simulate the button click to trigger the event listener
    document.getElementById('button1').click();

    // Use setTimeout to allow fetch to resolve before checking the DOM
    setTimeout(() => {
      const outputContent = document.getElementById('output').innerHTML;

      // Assertion to check if the output matches the expected string
      expect(outputContent).toBe('This is a sample text file');

      done(); // Indicate the test is complete
    }, 100); // Small delay to ensure fetch completes
  });
  it('should display the correct posts in #output1 when getJson is called', async function (done) {
    // Mocking the JSON response
    const mockJson = [
      { title: 'Post 1', body: 'This is post 1' },
      { title: 'Post 2', body: 'This is post 2' },
      { title: 'Post 3', body: 'This is post 3' },
      { title: 'Post 4', body: 'This is post 4' },
      { title: 'Post 5', body: 'This is post 5' }
    ];

    // Mock the fetch function to return the mock JSON
    spyOn(window, 'fetch').and.returnValue(
      Promise.resolve(new Response(JSON.stringify(mockJson)))
    );

    // Simulate the button click to trigger getJson function
    document.getElementById('button2').click();

    // Use setTimeout to allow fetch to complete before checking the DOM
    setTimeout(() => {
      const outputContent = document.getElementById('output1').innerHTML;

      // Expected output
      const expectedOutput = `
        <li>Post 1: This is post 1</li>
        <li>Post 2: This is post 2</li>
        <li>Post 3: This is post 3</li>
        <li>Post 4: This is post 4</li>
        <li>Post 5: This is post 5</li>
      `.trim().replace(/\s+/g, '');

      const normalizedOutputContent = outputContent.trim().replace(/\s+/g, '');

      // Assert that the output matches the expected HTML string (ignoring formatting)
      expect(normalizedOutputContent).toBe(expectedOutput);

      done(); // Indicate that the async test is complete
    }, 100); // Small delay to ensure fetch completes
  });

  it('should display the correct users in #output2 when getDataFromExternalAPI is called', async function (done) {
    // Mocking the API response
    const mockUsers = [
      { login: 'user1' },
      { login: 'user2' },
      { login: 'user3' },
      { login: 'user4' },
      { login: 'user5' }
    ];

    // Mock the fetch function to return the mock API response
    spyOn(window, 'fetch').and.returnValue(
      Promise.resolve(new Response(JSON.stringify(mockUsers)))
    );

    // Simulate the button click to trigger the function
    document.getElementById('button3').click();

    // Use setTimeout to allow fetch to complete before checking the DOM
    setTimeout(() => {
      const outputContent = document.getElementById('output2').innerHTML;

      // Expected output
      const expectedOutput = `
        <li>user1</li>
        <li>user2</li>
        <li>user3</li>
        <li>user4</li>
        <li>user5</li>
      `.trim().replace(/\s+/g, '');

      const normalizedOutputContent = outputContent.trim().replace(/\s+/g, '');

      // Assert that the output matches the expected HTML string (ignoring formatting)
      expect(normalizedOutputContent).toBe(expectedOutput);

      done(); // Indicate that the async test is complete
    }, 100); // Small delay to ensure fetch completes
  });
});
