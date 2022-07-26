import { useEffect, useState } from "react";
import { client } from "../supabase/client";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await client.auth.signIn({
        email,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (client.auth.user()) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="row pt-4">
      <div className="col-md-4 offset-md-4">
        <form onSubmit={handleSubmit} className="card card-body">
          <input
            type="email"
            name="email"
            placeholder="youremail@site.com"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control mb-4"
          />
          <button className="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  );
}
