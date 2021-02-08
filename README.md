# Anyway Kanban Board API
**Test assignment project API**

A sample Node/Express REST API (read only, no database) for [Anyway Kanban project](https://github.com/cat-street/anyway-kanban). JavaScript version.

* Live version - [https://api.anyway.catlogic.ru/](https://api.anyway.catlogic.ru/)
---
    * GET /kanban - get tasks
    * POST /kanban - create a task
    ```json
    {
      "id": "123456",
      "task": "Feed the cat"
    }
    ```
    * PATCH /kanban/start - start a task
    ```json
    {
      "id": "123456",
      "date": "2021-02-07T19:24:00",
      "status": "progress"
    }
    ```
    * PATCH /kanban/finish - finish a task
    ```json
    {
      "id": "123456",
      "date": "2021-02-07T19:24:00",
      "status": "done"
    }
    ```
