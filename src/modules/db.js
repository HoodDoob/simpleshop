export function insertOrder(payload) {
    const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkamxtY3F6cWl6cHhzaWV6d2RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY3MjQ0MzIsImV4cCI6MTk4MjMwMDQzMn0.7y7YweeSat5hG4kUIUdj8pqHjVLiisZuRgZKar5nT78'
    const url = "https://ydjlmcqzqizpxsiezwdd.supabase.co";
    fetch(url + "/rest/v1/simpleshop", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkamxtY3F6cWl6cHhzaWV6d2RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY3MjQ0MzIsImV4cCI6MTk4MjMwMDQzMn0.7y7YweeSat5hG4kUIUdj8pqHjVLiisZuRgZKar5nT78',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkamxtY3F6cWl6cHhzaWV6d2RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY3MjQ0MzIsImV4cCI6MTk4MjMwMDQzMn0.7y7YweeSat5hG4kUIUdj8pqHjVLiisZuRgZKar5nT78',
            Prefer: "return-representation",

        },
        body: JSON.stringify(payload),
    })

}

// const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkamxtY3F6cWl6cHhzaWV6d2RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY3MjQ0MzIsImV4cCI6MTk4MjMwMDQzMn0.7y7YweeSat5hG4kUIUdj8pqHjVLiisZuRgZKar5nT78',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkamxtY3F6cWl6cHhzaWV6d2RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY3MjQ0MzIsImV4cCI6MTk4MjMwMDQzMn0.7y7YweeSat5hG4kUIUdj8pqHjVLiisZuRgZKar5nT78'
//     },
//     body: '{"id":"11","color":"orragne","description":"great snack","doILikeIt":true}'
//   };
  
//   fetch('https://ydjlmcqzqizpxsiezwdd.supabase.co/rest/v1/colors', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));