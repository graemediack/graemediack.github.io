var viz;

function draw() {
    var user_password = prompt("neo4j password:");
    var config = {
        container_id: "viz",
        server_url: "bolt://localhost:7687",
        server_user: "neo4j",
        server_password: user_password,
        labels: {
            "Person": {
                "caption": "name",
                "size": "Age",
                "community": "community",
                "title_properties": [
                    "name"
                ]
            }
        },
        relationships: {
            "Parent": {
                "thickness": 3,
                "caption": true
            },
            "Spouse": {
                "thickness": 2,
                "caption": true
            }
        },
        initial_cypher: "MATCH (n) RETURN n LIMIT 10;"
    };

    viz = new NeoVis.default(config);
    viz.render();
}